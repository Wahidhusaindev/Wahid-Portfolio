import RevealOnScreen from './RevealOnScreen';
const About = () => {
    const frontendSkills = [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5 Logo" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3 Logo" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript Logo" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React Logo" },
        { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", alt: "Vue.js Logo" },
        { name: "TailwindCSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "TailwindCSS Logo" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap Logo" },
    ];

    const backendSkills = [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js Logo" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", alt: "Express Logo" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB Logo" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL Logo" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python Logo" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django Logo" },
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
                            <div className="flex flex-wrap gap-4 items-center">
                                {frontendSkills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center">
                                        <img
                                            src={skill.logo}
                                            alt={skill.alt}
                                            className="w-10 h-10 object-contain mb-1 drop-shadow-md hover:scale-110 transition-transform"
                                            title={skill.name}
                                        />
                                        <span className="text-xs text-blue-300 mt-1">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-4 items-center">
                                {backendSkills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center">
                                        <img
                                            src={skill.logo}
                                            alt={skill.alt}
                                            className={`w-10 h-10 object-contain mb-1 drop-shadow-md hover:scale-110 transition-transform ${skill.name === 'Express' ? 'bg-white border border-gray-300 rounded p-1' : ''}`}
                                            title={skill.name}
                                        />
                                        <span className="text-xs text-green-300 mt-1">{skill.name}</span>
                                    </div>
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
export default About;