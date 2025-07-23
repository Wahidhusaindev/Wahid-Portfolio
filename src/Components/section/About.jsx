import RevealOnScreen from './RevealOnScreen';
export const About = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vue",
        "TailwindCSS",
        "Bootstrap",
    ];

    const backendSkills = [
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "Python",
        "Django",
    ];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 scroll-mt-20">
            <RevealOnScreen />
            <div className="max-w-3xl mx-auto py-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300">
                    <p className="text-gray-300 mb-8">
                        Passionate developer with expertise in building scalable web applications and crafting innovative solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
  <li>
    <strong>BBA in Management</strong> - Mahatma Jyotiba Phule Rohilkhand University (2021 - 2024)
  </li>
  <li>
    <strong>Full Stack Web Development Course</strong> - AlmaBetter & Woolf University (2024 - Present)  
    <br />
    Focus: MERN stack, JavaScript, React, Node.js, Express, MongoDB, and more.
  </li>
  <li>
    Relevant Coursework: Principles of Management, Business Communication,<br />
    (Plus self-taught: Data Structures, Web Development Basics)
  </li>
</ul>

  </div>

  {/* You can add another card here, e.g., Projects & Experience */}
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4">💼 Projects & Experience</h3>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        <strong>Full-Stack Web Development Projects</strong> (AlmaBetter & Woolf University)
        <ul className="list-disc list-inside ml-4 mt-1 text-gray-400">
          <li>Built an e-commerce site using React, Node.js, and MongoDB. Implemented user authentication and dynamic product listings.</li>
          <li>Developed a responsive blog platform with RESTful API integration, focusing on UI/UX.</li>
        </ul>
      </li>
        <li>
        <strong>Freelance / Personal Projects</strong>
        <ul className="list-disc list-inside ml-4 mt-1 text-gray-400">
          <li>Created portfolio website using HTML, CSS, and JavaScript.</li>
          <li>Built a task management app to practice CRUD operations and state management.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

            </div>
            <RevealOnScreen />
        </section>
    );
}