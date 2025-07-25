import { useEffect } from "react"

const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
      aria-label="Mobile Menu"
    >
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
        &times;
      </button>
      <nav className="flex flex-col items-center space-y-8">
        <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors text-2xl">About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors text-2xl">Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors text-2xl">Contact</a>
      </nav>
    </div>
  )
}

export default MobileMenu
