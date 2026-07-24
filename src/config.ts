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
    image?: string;
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
            title: "SYNC — Student Collaboration and Project Management Platform",
            category: "fullstack",
            technologies: "Node.js, Express.js, MongoDB, Mongoose, React 19, Vite, Tailwind CSS, Python, Flask, Scikit-learn, Socket.io, Tazapay API, Firebase, Docker",
            image: undefined,
            description: "An educational and industrial collaboration ecosystem connecting students, supervisors, and organizations with AI suitability ranking, ML price estimation, and Tazapay escrow payments.",
            github: "https://github.com/HuzefaAbid/SYNC/",
            liveDemo: undefined,
            details: "Architected as a multi-module monorepo with a Node.js/Express REST backend, React 19 web interface, and Flask ML regression engine. Features automated 40-point applicant suitability scoring, dynamic project price estimation, real-time Socket.io chat, and multi-milestone Tazapay escrow payments with webhook synchronization."
        },
        {
            id: 2,
            title: "Multi-Agent Orchestration with MCP and A2A",
            category: "ai",
            technologies: "Python, Google GenAI SDK (ADK), Gemini API, FastAPI, MCP, Uvicorn, PowerShell",
            image: undefined,
            description: "A production-ready multi-agent orchestration architecture integrating Model Context Protocol (MCP) and Agent-to-Agent (A2A) communication patterns.",
            github: "https://github.com/Saad-Dev13/Multi_Agent_Orchestration_with_MCP_and_A2A",
            liveDemo: undefined,
            details: "Features a central host orchestrator powered by Gemini 2.0 Flash that dynamically discovers registered FastAPI microservice agents and MCP tool servers. Supports live command execution via a terminal server, remote arithmetic servers, and delegated specialized agent tasks with streaming status updates."
        },
        {
            id: 3,
            title: "AI-Based Vehicle Re-identification System",
            category: "ai",
            technologies: "Python, PyTorch, YOLOv8, OpenCV, ResNet, MobileNetV2, SQLite, PaddleOCR, ByteTrack",
            image: undefined,
            description: "A comprehensive vehicle re-identification and tracking system featuring three operational modes across single-image reference, database tracking, and live CCTV feeds.",
            github: "https://github.com/Saad-Dev13/vehicle-reidentification-using-YOLO",
            liveDemo: undefined,
            details: "Developed as a research project at the National Institute of Electronics (NIE). Combines YOLOv8 object detection with traditional computer vision (HOG, SIFT, Histograms) and deep learning feature extraction (ResNet, MobileNetV2) to match vehicles across different surveillance camera angles and timeframes with persistent SQLite storage."
        },
        {
            id: 4,
            title: "Mohammad Saad Iqbal — Personal Portfolio Website",
            category: "fullstack",
            technologies: "React, TypeScript, Three.js, React Three Fiber, GSAP, Vite, Lenis, Vercel",
            image: undefined,
            description: "A high-performance, interactive 3D portfolio website featuring custom WebGL 3D model head tracking, smooth scroll animations, and dynamic project showcases.",
            github: "https://github.com/Saad-Dev13/My_Portfolio_Website",
            liveDemo: "https://saad-portfolio-one.vercel.app/",
            details: "Built using React 18 and Three.js (@react-three/fiber/@react-three/drei) for real-time 3D rendering alongside GSAP ScrollTrigger for interactive timelines. Features a data-driven architecture powered by a central TypeScript config file driving certificates, domain-filtered project grids, interactive skill panels, and multi-resume popovers."
        },
        {
            id: 5,
            title: "Digital Twin AI Engine",
            category: "ai",
            technologies: "Python, FastAPI, Next.js, TypeScript, LangChain, ChromaDB, SentenceTransformers, Groq API, Gemini API, Docker",
            image: undefined,
            description: "A privacy-preserving, local-first behavioral cloning and RAG platform that transforms chat exports into an AI avatar replicating personal communication style.",
            github: "https://github.com/Saad-Dev13/digital-twin",
            liveDemo: undefined,
            details: "Built with a Next.js 14 dashboard and FastAPI backend. Processes unstructured WhatsApp export logs to extract dialogue pairs and generate 384-dimensional dense vector embeddings stored in a local persistent ChromaDB. Features a 4-step wizard, dual-cloud inference with automatic failover (Groq Llama 3 to Gemini), optional QLoRA fine-tuning support, and Docker containerization."
        },
        {
            id: 6,
            title: "ROAM v1: Autonomous Multi-Agent Travel Orchestrator",
            category: "ai",
            technologies: "Python, LangGraph, Groq API (Llama 3.3 70B), PostgreSQL, AviationStack API, Tavily API, Streamlit, psycopg3",
            image: undefined,
            description: "An enterprise-grade, stateful multi-agent travel orchestration engine built with LangGraph for real-time flight lookups, hotel discovery, and itinerary planning.",
            github: "https://github.com/Saad-Dev13/ROAM_multi-agent-travel-orchestrator-v1",
            liveDemo: undefined,
            details: "Coordinates specialized AI agents (Flight Agent, Hotel Agent, Itinerary Planner, Final Response Agent) using a LangGraph StateGraph. Features stateful thread checkpointing powered by PostgreSQL with connection pooling, high-speed LLM inference via Groq LPU (Llama 3.3 70B), real-time external API integrations, and automatic in-memory fallback handling."
        },
        {
            id: 7,
            title: "ROAM v2 — Autonomous Multi-Agent Travel Orchestrator",
            category: "ai",
            technologies: "Python, LangGraph, Model Context Protocol (MCP), FastMCP, Groq API (Llama 3.3 70B), PostgreSQL, Streamlit, Tavily MCP, AviationStack MCP, OpenWeather API",
            image: undefined,
            description: "An enterprise-grade, stateful multi-agent travel orchestrator built on LangGraph and the Model Context Protocol (MCP) for real-time flight lookups, hotel discovery, and weather forecasts.",
            github: "https://github.com/Saad-Dev13/ROAM_multi-agent-travel-orchestrator-v2",
            liveDemo: undefined,
            details: "Upgraded to a decoupled Model Context Protocol (MCP) architecture using MultiServerMCPClient across Stdio and Streamable HTTP transports. Coordinates specialized agents (Flight, Hotel, Weather, Itinerary Planner) with real-time tool execution, persistent PostgreSQL state checkpointing, custom FastMCP Weather Server integration, and a Streamlit dashboard."
        },
        {
            id: 8,
            title: "TOPAZ-VBE: Financial and Tactical Operations Simulator",
            category: "fullstack",
            technologies: "React, TypeScript, Vite, Tailwind CSS v4, Zustand, Recharts, Lucide React",
            image: undefined,
            description: "A high-fidelity, tick-based business environment simulator providing multi-dimensional manufacturing enterprise modeling, dynamic demand algorithms, and double-entry bookkeeping.",
            github: "https://github.com/Saad-Dev13/TOPAZ-VBE-Financial-and-Tactical-Operations-Simulator",
            liveDemo: undefined,
            details: "Engineered for Strategic Management Control at COMSATS University Islamabad. Features a custom Windows 95-styled UI system built with Tailwind CSS v4 and React. Simulates real-time logistics, production worker efficiency, dynamic regional demand, automated hysteresis inventory refilling, and persistent Zustand-based financial reporting (Income Statements, Balance Sheets, General Ledger)."
        },
        {
            id: 9,
            title: "EventEase — Complete Event Management System",
            category: "fullstack",
            technologies: "Node.js, Express.js, MongoDB, Mongoose, React, React Router DOM, Axios, JWT, bcrypt, Vite",
            image: undefined,
            description: "A full-stack MERN event management application featuring role-based access control, a protected admin dashboard, and a dark-themed UI.",
            github: "https://github.com/Saad-Dev13/eventease3",
            liveDemo: undefined,
            details: "Built using the MERN stack with JWT authentication and bcrypt password security. Features an administrative dashboard for event creation, contact message management, and dynamic statistics alongside a responsive card-based public event showcase and interactive contact features."
        },
        {
            id: 10,
            title: "Connect — Social + Professional Flutter App",
            category: "fullstack",
            technologies: "Flutter, Dart, Firebase Auth, Cloud Firestore, Firebase Storage, Jitsi Meet SDK, Material Design",
            image: undefined,
            description: "A cross-platform Flutter application combining social networking with professional collaboration, featuring real-time feeds, video conferencing, and project management.",
            github: "https://github.com/Saad-Dev13/ConnectApp",
            liveDemo: undefined,
            details: "Built with Flutter and a complete Firebase backend (Auth, Firestore, and Storage). Integrates the Jitsi Meet SDK for real-time video conferencing, allowing users to create rooms, manage profiles, share image/text feeds, and post project listings with timestamps and pricing."
        },
        {
            id: 11,
            title: "Opalumpus — Travel and Tour Agency MERN Stack Application",
            category: "fullstack",
            technologies: "Node.js, Express.js, MongoDB, Mongoose, React, JavaScript, CSS3",
            image: undefined,
            description: "A full-stack travel and tour agency platform enabling destination browsing for users and a secure administrative panel for tour management.",
            github: "https://github.com/Saad-Dev13/Opalumpus",
            liveDemo: undefined,
            details: "Architected using the MERN stack with RESTful Express endpoints and MongoDB data modeling. Features an authenticated admin dashboard supporting full CRUD operations for managing trip packages, itineraries, and destination listings."
        },
        {
            id: 12,
            title: "Tic Tac Toe — Unbeatable Engine",
            category: "fullstack",
            technologies: "Python, CLI",
            image: undefined,
            description: "A terminal-based Tic Tac Toe game developed in pure Python featuring a single-player mode with an unbeatable computer decision algorithm.",
            github: "https://github.com/Saad-Dev13/TIcTacToe-_if_elif_only",
            liveDemo: undefined,
            details: "Built as a first-semester ICT project to demonstrate fundamental control flow and conditional decision logic in Python. Implemented purely with core control structures, featuring a two-player local mode and a single-player mode against a hardcoded algorithmic strategy."
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
