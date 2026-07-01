export default function Footer(){
  return (
    <footer className="py-10 border-t">
      <div className="container text-center text-sm text-gray-600">
        © {new Date().getFullYear()} BSC — MEP Consulting. All rights reserved.
      </div>
    </footer>
  )
}
