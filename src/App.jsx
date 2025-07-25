import { useState } from "react";
import "./App.css";
import LoadingScreen from "./Components/LoadingScreen";
import Navbar from "./Components/section/Navbar";
import "./index.css";
import MobileMenu from "./Components/MobileMenu";
import Home from "./Components/section/Home";
import About from "./Components/section/About";
import Projects from "./Components/section/Projects";
import Contact from "./Components/section/Contact";
import Footer from "./Components/section/Footer";




const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer className="w-full text-center py-4 text-gray-500 text-sm">
        Made with <span className="text-red-500">❤️</span> by Wahid Husain
      </footer>
      </div>
    </>
  );
};

export default App;
