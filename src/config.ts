export interface Experience {
    position: string;
    company: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
}

export interface Project {
    id: number;
    title: string;
    category: "ai" | "fullstack" | "design";
    technologies: string;
    image: string;
    description: string;
    github?: string;
    liveDemo?: string;
    details?: string;
}

export interface Achievement {
    title: string;
    description: string;
    year: string;
    image?: string;
    tags?: string[];
}

export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    category: "aiml" | "fullstack" | "design" | "other";
    description?: string;
    credentialUrl?: string;
    image?: string;
}

export interface Resume {
    label: string;
    file: string;
    icon: string;
    accent: string;
}

export interface SkillCategory {
    title: string;
    description: string;
    details: string;
    tools: string[];
}

export interface Config {
    developer: {
        name: string;
        fullName: string;
        title: string;
        titles: string[];
        description: string;
    };
    social: {
        github: string;
        email: string;
        location: string;
    };
    about: {
        title: string;
        description: string;
    };
    experiences: Experience[];
    projects: Project[];
    achievements: Achievement[];
    certificates: Certificate[];
    resumes: Resume[];
    contact: {
        email: string;
        github: string;
        linkedin: string;
        behance?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
        phone?: string;
    };
    skills: {
        aiml: SkillCategory;
        develop: SkillCategory;
        design: SkillCategory;
    };
}

export const config: Config = {
    developer: {
        name: "Saad",
        fullName: "Mohammad Saad Iqbal",
        title: "AI & ML Engineer | Full-Stack Developer | Designer",
        titles: [
            "AI & ML Engineer",
            "Full-Stack Developer",
            "Designer",
        ],
        description: "CS Graduate specializing in Agentic AI systems, multi-agent orchestration, full-stack web applications, and intuitive UI/UX design. Passionate about building intelligent, scalable digital solutions."
    },
    social: {
        github: "Saad-Dev13",
        email: "saad.dev13@gmail.com",
        location: "Islamabad, Pakistan"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science Graduate from COMSATS University Islamabad thriving at the intersection of logical system architecture, cutting-edge AI, and intuitive design. My focus centers on Agentic AI (LangChain, LangGraph), custom LLM pipelines, full-stack web applications, and creative visual design. From leading campus tech communities as Campus Co-Leader for AWS Student Builder Group to building computer vision models at research institutes, I craft end-to-end intelligent solutions."
    },
    experiences: [
        {
            position: "Exploring AI & ML",
            company: "Self-Directed Research",
            period: "Feb 2026 - Present",
            location: "Islamabad, Pakistan",
            description: "Deep-diving into autonomous AI systems, agentic architectures, and the frontier of multi-agent orchestration.",
            responsibilities: [
                "Building autonomous agentic AI systems using LangGraph and LangChain with custom memory and tool-use pipelines",
                "Exploring multi-agent orchestration patterns, supervisor architectures, and stateful agent graphs",
                "Implementing Retrieval-Augmented Generation (RAG) pipelines and custom LLM integrations",
                "Researching AI safety, prompt engineering, and large-scale model evaluation methodologies"
            ],
            technologies: ["LangGraph", "LangChain", "RAG", "Multi-Agent Systems", "OpenAI API", "Python", "Agentic AI"]
        },
        {
            position: "Campus Co-leader",
            company: "AWS Student Builder Group at CUI",
            period: "Oct 2024 - Present",
            location: "Islamabad, Pakistan",
            description: "Spearheading campus-wide AWS Cloud community growth, technical workshops, and cloud literacy.",
            responsibilities: [
                "Leading strategic initiatives and managing cross-functional teams to foster cloud innovation",
                "Overseeing technical workshops, cloud labs, and hands-on learning experiences",
                "Collaborating with AWS Educate and university leadership to bridge academia and cloud industry practices"
            ],
            technologies: ["AWS Services", "Cloud Computing", "Leadership", "Community Building"]
        },
        {
            position: "Design And Development Engineer",
            company: "Freelance",
            period: "Feb 2022 - Present",
            location: "Islamabad, Pakistan",
            description: "Delivering full-stack web solutions, creative UI/UX design, and AI integration for clients.",
            responsibilities: [
                "Architecting web applications using modern full-stack frameworks and UI/UX best practices",
                "Designing visual branding assets and interactive interface prototypes in Adobe CS & Figma",
                "Integrating AI workflows and backend automation into modern client solutions"
            ],
            technologies: ["React", "Node.js", "Python", "UI/UX Design", "Adobe Creative Suite", "Figma"]
        },
        {
            position: "Machine Learning Intern",
            company: "National Institute of Electronics",
            period: "Jul 2025 - Aug 2025",
            location: "Islamabad, Pakistan",
            description: "Worked on AI for embedded systems, computer vision models, and edge computing.",
            responsibilities: [
                "Developed a Vehicle Re-identification System using advanced computer vision across multi-camera feeds",
                "Trained and optimized YOLO-based object detection models for low-power edge devices",
                "Collaborated with researchers on computer vision data pipelines and model optimization"
            ],
            technologies: ["Python", "Computer Vision", "YOLO", "PyTorch", "OpenCV", "Edge AI"]
        },
        {
            position: "Graphic Design Intern",
            company: "Centangle Interactive",
            period: "Aug 2025 - Sep 2025",
            location: "Islamabad, Pakistan",
            description: "Created user-focused visual assets, digital marketing materials, and branding elements.",
            responsibilities: [
                "Designed digital graphics, UI assets, and marketing collateral for client projects",
                "Crafted visual storytelling materials aligned with brand standards and campaign goals",
                "Supported cross-functional design teams with creative direction"
            ],
            technologies: ["Adobe Photoshop", "Adobe Illustrator", "Graphic Design", "UI/UX"]
        },
        {
            position: "Director of Operations",
            company: "CTS (COMSATS Tech Society)",
            period: "Apr 2025 - Jan 2026",
            location: "Islamabad, Pakistan",
            description: "Managed logistics, execution, and student outreach for major technical society events.",
            responsibilities: [
                "Organized and executed technical hackathons, coding workshops, and guest speaker sessions",
                "Managed operational logistics and cross-team communication for smooth executions",
                "Fostered student engagement to strengthen the technical community on campus"
            ],
            technologies: ["Operations Management", "Event Planning", "Team Leadership"]
        },
        {
            position: "Vice President",
            company: "Zindigi Prize - CUI",
            period: "Feb 2025 - Jul 2025",
            location: "Islamabad, Pakistan",
            description: "Led student programs promoting financial literacy and startup innovation with Zindigi FinTech.",
            responsibilities: [
                "Oversaw campaigns and workshops bridging technology and digital banking",
                "Managed student outreach, event logistics, and strategic youth empowerment initiatives"
            ],
            technologies: ["Leadership", "FinTech", "Strategic Planning", "Public Speaking"]
        },
        {
            position: "Lead Designer",
            company: "CDCS (COMSATS Drama & Comics Society)",
            period: "Nov 2023 - Oct 2024",
            location: "Islamabad, Pakistan",
            description: "Directed visual identity, campaign design, and branding for society events.",
            responsibilities: [
                "Designed complete visual identities, event posters, logos, and recruitment visuals",
                "Recognized with 'Most Active Executive' and 'Appreciation Certificate' awards"
            ],
            technologies: ["Adobe Illustrator", "Photoshop", "Branding", "Creative Direction"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "ROAM — Multi-Agent Travel Orchestrator",
            category: "ai",
            technologies: "Python, LangGraph, LangChain, PostgreSQL, OpenAI API, React",
            image: "/images/roam.png",
            description: "An autonomous multi-agent orchestration system that handles travel planning, context retention, and dynamic task execution using graph memory.",
            github: "https://github.com/Saad-Dev13",
            liveDemo: undefined,
            details: "Built using LangGraph to coordinate specialized sub-agents (flight search, hotel booking, itinerary planner). Each agent maintains persistent state through a shared memory graph, enabling context-aware multi-turn conversations and autonomous decision making."
        },
        {
            id: 2,
            title: "Vehicle Re-Identification System",
            category: "ai",
            technologies: "Python, PyTorch, YOLO, OpenCV, Deep Learning",
            image: "/images/vehicle-reid.png",
            description: "Advanced computer vision platform built during NIE research internship to track and re-identify vehicles across multiple security camera feeds.",
            github: undefined,
            liveDemo: undefined,
            details: "Implemented a multi-camera vehicle re-ID pipeline using YOLO for detection and a custom deep metric learning model for cross-camera matching. Optimized for edge deployment on low-power embedded devices."
        },
        {
            id: 3,
            title: "Portfolio Website",
            category: "fullstack",
            technologies: "React, TypeScript, Vite, GSAP, Three.js, CSS",
            image: "/images/portfolio.png",
            description: "This very portfolio — a high-performance, animated personal website with 3D character model, smooth scroll, and dynamic content from a central config.",
            github: "https://github.com/Saad-Dev13",
            liveDemo: undefined,
            details: "Built with Vite + React + TypeScript. Uses GSAP ScrollTrigger for horizontal scroll animation, Lenis for smooth scrolling, and a Three.js 3D character model. All content driven from a typed config file."
        },
        {
            id: 4,
            title: "Full-Stack App — Coming Soon",
            category: "fullstack",
            technologies: "React, Node.js, Express, PostgreSQL, TypeScript",
            image: "/images/project4.png",
            description: "A full-stack web application currently in development. Focused on scalable backend architecture and clean UI/UX.",
            github: undefined,
            liveDemo: undefined,
            details: "Project in active development. Will feature REST API with Express, PostgreSQL database, JWT authentication, and a React frontend with clean, accessible design."
        },
        {
            id: 5,
            title: "Brand Identity — Design Project",
            category: "design",
            technologies: "Adobe Illustrator, Photoshop, Figma",
            image: "/images/design1.png",
            description: "Complete visual identity design including logo suite, color systems, typography, and brand guidelines for a digital-first client.",
            github: undefined,
            liveDemo: undefined,
            details: "Delivered full brand identity: primary/secondary logo variants, color palette, typography system, brand usage guidelines, and social media templates. Designed in Figma and finalized in Adobe Illustrator."
        },
        {
            id: 6,
            title: "UI/UX Design Showcase",
            category: "design",
            technologies: "Figma, Adobe XD, CSS Animations",
            image: "/images/design2.png",
            description: "A curated showcase of interface design work — dashboards, mobile apps, and web landing pages with premium aesthetics.",
            github: undefined,
            liveDemo: undefined,
            details: "Collection of UI/UX design projects including an analytics dashboard, mobile food delivery app, and SaaS landing page. Each with full design system documentation."
        }
    ],
    contact: {
        email: "saad.dev13@gmail.com",
        github: "https://github.com/Saad-Dev13",
        linkedin: "https://www.linkedin.com/in/mohammad-saad-iqbal-/",
        behance: "https://www.behance.net/mohammadsaadiqbal",
        phone: "+92-302-0934003"
    },
    achievements: [
        {
            title: "Most Active Executive Award",
            description: "Recognized for exceptional dedication and consistent contributions as Lead Designer at COMSATS Drama & Comics Society. Awarded 'Most Active Executive' for outstanding performance across society campaigns and events.",
            year: "2024",
            image: "/images/achievement1.jpg",
            tags: ["Leadership", "Design", "Award"]
        },
        {
            title: "AWS Student Builder Group — Campus Co-Leader",
            description: "Selected as Campus Co-Leader for the AWS Student Builder Group at COMSATS University Islamabad. Leading cloud literacy initiatives, technical workshops, and bridging the gap between academia and industry cloud practices.",
            year: "2026",
            image: "/images/achievement2.jpg",
            tags: ["AWS", "Leadership", "Cloud Computing"]
        },
        {
            title: "Machine Learning Internship — NIE",
            description: "Completed a machine learning internship at the National Institute of Electronics, building a multi-camera Vehicle Re-Identification System and optimizing YOLO models for edge deployment.",
            year: "2025",
            image: "/images/achievement3.jpg",
            tags: ["AI", "Computer Vision", "Research"]
        }
    ],
    certificates: [
        {
            title: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            date: "2025",
            category: "other",
            description: "Fundamental cloud knowledge, security, architecture, pricing, and support services across AWS infrastructure.",
            credentialUrl: "https://aws.amazon.com/verification",
            image: "/images/cert-aws.jpg"
        },
        {
            title: "Machine Learning Specialization",
            issuer: "Coursera / DeepLearning.AI",
            date: "2024",
            category: "aiml",
            description: "Supervised & unsupervised learning, neural networks, decision trees, recommender systems, and reinforcement learning.",
            credentialUrl: "https://coursera.org/verify/specialization",
            image: "/images/cert-ml.jpg"
        },
        {
            title: "Python for Everybody",
            issuer: "University of Michigan",
            date: "2023",
            category: "aiml",
            description: "Data structures, web scraping, databases, and data visualization using Python.",
            credentialUrl: "https://coursera.org/verify/python",
            image: undefined
        },
        {
            title: "Full-Stack Web Development with React",
            issuer: "Hong Kong University of Science and Technology",
            date: "2024",
            category: "fullstack",
            description: "Frontend web UI frameworks, React, Redux, Node.js, Express, and MongoDB backend integration.",
            credentialUrl: undefined,
            image: undefined
        },
        {
            title: "UI/UX Design Fundamentals",
            issuer: "Google / Coursera",
            date: "2023",
            category: "design",
            description: "User research, wireframing, high-fidelity prototyping, design systems, and usability testing in Figma.",
            credentialUrl: "https://coursera.org/verify/uiux",
            image: undefined
        }
    ],
    resumes: [
        {
            label: "AI & ML Resume",
            file: "/resumes/resume-aiml.pdf",
            icon: "✦",
            accent: "#c481ff"
        },
        {
            label: "Full-Stack Resume",
            file: "/resumes/resume-fullstack.pdf",
            icon: "⬡",
            accent: "#81d4ff"
        },
        {
            label: "Design Resume",
            file: "/resumes/resume-design.pdf",
            icon: "◈",
            accent: "#ff81c4"
        }
    ],
    skills: {
        aiml: {
            title: "AI & ML ENGINEER",
            description: "Building intelligent agents & computer vision systems",
            details: "Developing autonomous AI agents, multi-agent orchestration graphs (LangGraph/LangChain), custom LLM pipelines, RAG systems, and computer vision models using Python and PyTorch.",
            tools: ["Python", "LangChain", "LangGraph", "PyTorch", "OpenCV", "Scikit-Learn", "RAG", "LLMs", "YOLO", "OpenAI API"]
        },
        develop: {
            title: "FULL-STACK DEVELOPER",
            description: "Scalable web applications & cloud-backed systems",
            details: "Building responsive full-stack applications with React, Node.js, TypeScript, and cloud backends. Comfortable from database design to deployment pipelines.",
            tools: ["React", "Node.js", "TypeScript", "Next.js", "AWS", "PostgreSQL", "MongoDB", "FastAPI", "Docker", "Git"]
        },
        design: {
            title: "DESIGNER",
            description: "Visual identity, UI/UX & creative direction",
            details: "Crafting polished interfaces, brand identities, and visual systems using industry-standard tools. Adobe Certified with deep expertise in typography, color systems, and interaction design.",
            tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "UI/UX Design", "Branding", "Motion Design", "Typography"]
        }
    }
};
