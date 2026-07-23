import { useState } from "react";
import "./styles/TechStackNew.css";

type TechTab = "ai" | "fullstack" | "design";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const TAB_META: Record<TechTab, { label: string; accent: string; icon: string }> = {
  ai:        { label: "AI & ML",     accent: "#c481ff", icon: "✦" },
  fullstack: { label: "Full Stack",  accent: "#81d4ff", icon: "⬡" },
  design:    { label: "Design",      accent: "#ff81c4", icon: "◈" },
};

const techByTab: Record<TechTab, TechItem[][]> = {
  ai: [
    // Row 1
    [
      { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",           url: "https://python.org" },
      { name: "PyTorch",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",         url: "https://pytorch.org" },
      { name: "TensorFlow",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",   url: "https://tensorflow.org" },
      { name: "Scikit-learn",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
      { name: "OpenCV",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",           url: "https://opencv.org" },
      { name: "NumPy",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",             url: "https://numpy.org" },
      { name: "Pandas",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",           url: "https://pandas.pydata.org" },
      { name: "Jupyter",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",         url: "https://jupyter.org" },
    ],
    // Row 2
    [
      { name: "Hugging Face",icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",                      url: "https://huggingface.co" },
      { name: "LangChain",   icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",                             url: "https://langchain.com" },
      { name: "FastAPI",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",         url: "https://fastapi.tiangolo.com" },
      { name: "C++",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",     url: "https://isocpp.org" },
      { name: "Bash",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",               url: "https://www.gnu.org/software/bash/" },
      { name: "Linux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",             url: "https://linux.org" },
    ],
    // Row 3
    [
      { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",   url: "https://postgresql.org" },
      { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                 url: "https://git-scm.com" },
      { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",           url: "https://code.visualstudio.com" },
      { name: "AWS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com" },
    ],
  ],

  fullstack: [
    // Row 1
    [
      { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",             url: "https://react.dev" },
      { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",   url: "https://typescriptlang.org" },
      { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",   url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",           url: "https://nextjs.org" },
      { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",           url: "https://nodejs.org" },
      { name: "HTML",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",             url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",               url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",           url: "https://python.org" },
    ],
    // Row 2
    [
      { name: "Django",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",              url: "https://djangoproject.com" },
      { name: "Flask",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",             url: "https://flask.palletsprojects.com" },
      { name: "FastAPI",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",         url: "https://fastapi.tiangolo.com" },
      { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",   url: "https://postgresql.org" },
      { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",         url: "https://mongodb.com" },
      { name: "Redis",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",             url: "https://redis.io" },
    ],
    // Row 3
    [
      { name: "Docker",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",           url: "https://docker.com" },
      { name: "AWS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com" },
      { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                 url: "https://git-scm.com" },
      { name: "Postman",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",         url: "https://postman.com" },
    ],
  ],

  design: [
    // Row 1
    [
      { name: "Figma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",             url: "https://figma.com" },
      { name: "Photoshop",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",     url: "https://adobe.com/products/photoshop" },
      { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",    url: "https://adobe.com/products/illustrator" },
      { name: "After Effects",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg", url: "https://adobe.com/products/aftereffects" },
      { name: "HTML",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",             url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",               url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
    // Row 2
    [
      { name: "Tailwind",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
      { name: "Bootstrap",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",     url: "https://getbootstrap.com" },
      { name: "MS Office",   icon: "https://img.icons8.com/color/48/microsoft-office-2019.png",                               url: "https://www.microsoft.com/microsoft-365" },
      { name: "Canva",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",             url: "https://canva.com" },
    ],
  ],
};

const TechStackNew = () => {
  const [activeTab, setActiveTab] = useState<TechTab>("ai");

  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        {/* Tabs */}
        <div className="techstack-tabs">
          {(Object.entries(TAB_META) as [TechTab, typeof TAB_META.ai][]).map(([key, meta]) => (
            <button
              key={key}
              className={`techstack-tab${activeTab === key ? " techstack-tab-active" : ""}`}
              style={activeTab === key ? { borderColor: meta.accent, color: meta.accent } : {}}
              onClick={() => setActiveTab(key)}
            >
              <span>{meta.icon}</span>
              {meta.label}
            </button>
          ))}
        </div>

        {/* Pyramid for active tab */}
        <div className="techstack-pyramid" key={activeTab}>
          {techByTab[activeTab].map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
