import RevealOnScreen from "./RevealOnScreen";
const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScreen />
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Wahid Husain
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Full-Stack Web Developer with expertise in the MERN stack. I recently completed my BBA in 2024, blending my business knowledge with technical skills. Currently, I'm advancing my web development journey at AlmaBetter. I’m passionate about building fast, user-friendly applications that solve real-world problems.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="bg-cyan-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-cyan-600"
            >
              Download CV
            </a>
          </div>
        </div>
        <RevealOnScreen />
      </section>
    
    </div>
  );
};
export default Home;
