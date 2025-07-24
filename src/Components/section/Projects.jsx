import RevealOnScreen from './RevealOnScreen';
const Projects = () => {
    const projects = [
        {
            title: "Cloud Platform",
            description: "A scalable cloud platform for data storage and processing.",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "#"
        },
        {
            title: "E-Commerce App",
            description: "A modern e-commerce application with payment integration.",
            tech: ["React", "Redux", "Stripe", "Express"],
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase projects and skills.",
            tech: ["React", "TailwindCSS", "Vite"],
            link: "#"
        },
        {
            title: "Chat Application",
            description: "A real-time chat application with authentication.",
            tech: ["React", "Socket.io", "Node.js", "MongoDB"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 scroll-mt-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.title} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div>
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;