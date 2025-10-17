import healthConnectImg from "../assets/healthConnect.png";
import whereIsItImg from "../assets/whereisit.png";
import hobbyHubImg from "../assets/hobbyHub.png";
export const projects = [
  {
    id: 1,
    name: "HealthConnect",
    image: healthConnectImg,
    techStack: ["React", "TailwindCSS", "Vite"],
    description: "A personal portfolio website showcasing my projects and skills.",
    liveLink: "https://healthconnect-ph.netlify.app/",
    githubLink: "https://github.com/username/portfolio-client",
    challenges: "Making the design fully responsive across all devices.",
    improvements: "Add dark mode toggle and animations."
  },
  {
    id: 2,
    name: "WhereIsIt",
    image: whereIsItImg,
    techStack: ["React", "Node.js", "MongoDB"],
    description: "An online store with cart functionality, payment gateway integration, and user authentication.",
    liveLink: "https://whereisit0.netlify.app/",
    githubLink: "https://github.com/username/ecommerce-client",
    challenges: "Handling real-time cart updates and payment integration.",
    improvements: "Implement admin panel for inventory management."
  },
  {
    id: 3,
    name: "HobbyHub",
    image: hobbyHubImg,
    techStack: ["React", "Firebase"],
    description: "A task management app with real-time updates and user authentication.",
    liveLink: "https://hobbyhub-a10.netlify.app/",
    githubLink: "https://github.com/username/taskmanager-client",
    challenges: "Ensuring real-time sync of tasks across devices.",
    improvements: "Add notifications and offline support."
  }
];
