(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/components/ProjectDetailPage.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/ProjectDetailPage.js'\n\nUnexpected token `<`. Expected identifier, string literal, numeric literal or [ for the computed key");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/data/projectDetails.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectDetails",
    ()=>projectDetails
]);
const projectDetails = {
    ashesiUniversity: {
        name: 'Ashesi University Campus',
        location: 'Berekuso, Ghana',
        sector: 'Education Sector',
        timeline: 'Multiple Phases (2008 - Ongoing)',
        heroSummary: 'Delivering integrated MEP engineering solutions for one of Africa\'s leading private universities.',
        overviewHeading: 'Integrated MEP Solutions for a Growing Campus',
        overviewParagraphs: [
            'Ashesi University is one of Africa\'s most respected centers of learning, innovation, and leadership. Built Engineering Consult has been privileged to provide MEP consulting services for the campus since its early development phases.',
            'Our integrated engineering solutions ensure a comfortable, energy-efficient, and sustainable environment that supports teaching, learning, research, and community life.'
        ],
        quote: 'Built Engineering Consult has been a trusted partner in our journey to build a world-class university. Their MEP expertise, professionalism, and commitment to quality have been instrumental in shaping our campus.',
        quoteAttribution: '- Ashesi University Project Team',
        imageBasePath: '/images/project-details/ashesi-university',
        fallbackImage: '/images/projects/project-1.jpg',
        stats: [
            {
                value: '5,000+',
                label: 'Students Supported'
            },
            {
                value: '12+',
                label: 'Buildings & Facilities'
            },
            {
                value: '150,000+ m2',
                label: 'Total Built-up Area'
            },
            {
                value: '15+ Years',
                label: 'MEP Consulting Partnership'
            }
        ],
        contributionBullets: [
            'Reliable building systems for academic and residential facilities',
            'Energy-efficient solutions tailored to Ghana\'s climate',
            'Systems designed for scalability and future phases',
            'Close collaboration with the Ashesi project team across all development stages'
        ]
    },
    icgcChristTempleEast: {
        name: 'ICGC-Christ Temple East',
        location: 'Accra, Ghana',
        sector: 'Worship & Community Infrastructure',
        timeline: 'Phased Delivery (Completed)',
        heroSummary: 'High-density cooling and resilient MEP systems engineered for high-occupancy worship spaces.',
        overviewHeading: 'Performance-Driven Systems for Large Congregations',
        overviewParagraphs: [
            'For ICGC-Christ Temple East, Built Engineering Consult delivered integrated MEP systems designed to support large gatherings while maintaining comfort, safety, and operational efficiency.',
            'The solution balanced peak-load performance, redundancy, and long-term maintainability to ensure dependable services during high-demand events.'
        ],
        quote: 'The technical depth and practical coordination from Built Engineering Consult helped us deliver a facility that performs reliably for every service and community event.',
        quoteAttribution: '- ICGC-Christ Temple East Team',
        imageBasePath: '/images/project-details/icgc-christ-temple-east',
        fallbackImage: '/images/projects/project-2.jpg'
    },
    digitalRealty: {
        name: 'Digital Realty',
        location: 'Accra, Ghana',
        sector: 'Commercial & Mission-Critical Facilities',
        timeline: 'Multi-Stage Development',
        heroSummary: 'Integrated MEP systems for high-performance commercial infrastructure with reliability at its core.',
        overviewHeading: 'Reliable Building Services for Mission-Critical Operations',
        overviewParagraphs: [
            'Built Engineering Consult supported Digital Realty with coordinated MEP engineering tailored for uptime, flexibility, and future expansion.',
            'Our design approach emphasized efficiency, resilience, and seamless system integration across mechanical, electrical, and public health services.'
        ],
        quote: 'Built Engineering Consult understood the performance standards we required and translated them into practical, buildable engineering solutions.',
        quoteAttribution: '- Digital Realty Project Team',
        imageBasePath: '/images/project-details/digital-realty',
        fallbackImage: '/images/projects/project-3.jpg'
    },
    theNova: {
        name: 'The Nova',
        location: 'Accra, Ghana',
        sector: 'Healthcare Infrastructure',
        timeline: 'Design to Delivery',
        heroSummary: 'Critical MEP systems designed to support healthcare resilience, patient comfort, and clinical continuity.',
        overviewHeading: 'Engineering Systems That Support Clinical Excellence',
        overviewParagraphs: [
            'The Nova required robust, dependable building services suited to healthcare environments where uptime and environmental control are essential.',
            'Built Engineering Consult delivered coordinated MEP designs focused on resilience, operational safety, and long-term efficiency.'
        ],
        quote: 'The team\'s understanding of healthcare operational demands made a measurable difference in the quality and reliability of our facility systems.',
        quoteAttribution: '- The Nova Project Team',
        imageBasePath: '/images/project-details/the-nova',
        fallbackImage: '/images/projects/project-4.jpg'
    },
    googleGhana: {
        name: 'Google Ghana',
        location: 'Accra, Ghana',
        sector: 'Corporate Workplace',
        timeline: 'Fit-Out & Systems Integration',
        heroSummary: 'Smart, energy-conscious workplace systems with integrated controls for modern office performance.',
        overviewHeading: 'Future-Ready MEP for Modern Workspaces',
        overviewParagraphs: [
            'For Google Ghana, Built Engineering Consult delivered integrated building services that support comfort, adaptability, and technology-enabled operations.',
            'The project combined strong engineering fundamentals with energy-efficient strategies and modern controls integration.'
        ],
        quote: 'Built Engineering Consult delivered practical and high-performing engineering solutions that aligned with our workspace and sustainability goals.',
        quoteAttribution: '- Google Ghana Project Team',
        imageBasePath: '/images/project-details/google-ghana',
        fallbackImage: '/images/projects/project-5.jpg'
    },
    industrialPlantRetrofit: {
        name: 'Industrial Plant Retrofit',
        location: 'Tema, Ghana',
        sector: 'Industrial & Manufacturing',
        timeline: 'Retrofit Programme',
        heroSummary: 'MEP modernization for industrial performance, safety, and reduced operational downtime.',
        overviewHeading: 'Retrofitting Critical Services for Industrial Continuity',
        overviewParagraphs: [
            'Built Engineering Consult upgraded legacy systems to improve reliability, capacity, and energy performance for industrial operations.',
            'Our staged implementation strategy helped maintain production continuity while delivering substantial infrastructure improvements.'
        ],
        quote: 'Their phased approach and deep technical coordination enabled us to modernize essential systems without compromising production targets.',
        quoteAttribution: '- Industrial Plant Operations Team',
        imageBasePath: '/images/project-details/industrial-plant-retrofit',
        fallbackImage: '/images/projects/project-6.jpg'
    },
    chGroup: {
        name: 'CH Group',
        location: 'Accra, Ghana',
        sector: 'Mixed-Use Commercial',
        timeline: 'Development Partnership',
        heroSummary: 'Integrated services engineering for a mixed-use commercial portfolio focused on performance and scalability.',
        overviewHeading: 'Coordinated MEP for Mixed-Use Growth',
        overviewParagraphs: [
            'Built Engineering Consult partnered with CH Group to deliver MEP engineering solutions across diverse tenancy and occupancy requirements.',
            'The systems were designed for flexibility, maintainability, and long-term operating efficiency.'
        ],
        quote: 'Built Engineering Consult brought technical clarity and dependable delivery to every stage of our project development.',
        quoteAttribution: '- CH Group Project Team',
        imageBasePath: '/images/project-details/ch-group',
        fallbackImage: '/images/projects/project-7.jpg'
    },
    sustainableCampusDevelopment: {
        name: 'Sustainable Campus Development',
        location: 'Ghana',
        sector: 'Education & Institutional Infrastructure',
        timeline: 'Long-Term Development Programme',
        heroSummary: 'Sustainable MEP strategies designed to support efficient, low-carbon campus expansion.',
        overviewHeading: 'Sustainable Engineering for Evolving Campuses',
        overviewParagraphs: [
            'This campus development programme focused on resilient utility systems, reduced energy demand, and phased infrastructure growth.',
            'Built Engineering Consult delivered integrated MEP solutions that align sustainability goals with operational reliability.'
        ],
        quote: 'The engineering strategy gave us the confidence to scale our campus responsibly while improving day-to-day performance.',
        quoteAttribution: '- Campus Development Team',
        imageBasePath: '/images/project-details/sustainable-campus-development',
        fallbackImage: '/images/projects/project-8.jpg'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/projects/industrial-plant-retrofit.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndustrialPlantRetrofitProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectDetailPage$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectDetailPage.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projectDetails.js [client] (ecmascript)");
;
;
;
function IndustrialPlantRetrofitProjectPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectDetailPage$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        project: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$client$5d$__$28$ecmascript$29$__["projectDetails"].industrialPlantRetrofit
    }, void 0, false, {
        fileName: "[project]/pages/projects/industrial-plant-retrofit.js",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = IndustrialPlantRetrofitProjectPage;
var _c;
__turbopack_context__.k.register(_c, "IndustrialPlantRetrofitProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/projects/industrial-plant-retrofit.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/projects/industrial-plant-retrofit";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/projects/industrial-plant-retrofit.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/projects/industrial-plant-retrofit.js\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/projects/industrial-plant-retrofit.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1qjlz64._.js.map