module.exports = [
"[project]/components/ProjectDetailPage.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/ProjectDetailPage.js'\n\nUnexpected token `<`. Expected identifier, string literal, numeric literal or [ for the computed key");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/data/projectDetails.js [ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/pages/projects/digital-realty.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DigitalRealtyProjectPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectDetailPage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectDetailPage.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projectDetails.js [ssr] (ecmascript)");
;
;
;
function DigitalRealtyProjectPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectDetailPage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        project: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projectDetails$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["projectDetails"].digitalRealty
    }, void 0, false, {
        fileName: "[project]/pages/projects/digital-realty.js",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1v4b96u._.js.map