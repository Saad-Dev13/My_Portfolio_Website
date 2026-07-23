import { useState } from "react";
import "./styles/Work.css";
import { config } from "../config";

type WorkCategory = "ai" | "fullstack" | "design";

const CATEGORY_META: Record<WorkCategory, { label: string; accent: string; icon: string }> = {
  ai: { label: "AI & ML", accent: "#c481ff", icon: "✦" },
  fullstack: { label: "Full Stack", accent: "#81d4ff", icon: "⬡" },
  design: { label: "Design", accent: "#ff81c4", icon: "◈" },
};

// --- Project Detail Modal ---
interface ModalProps {
  title: string;
  details: string;
  onClose: () => void;
}

const ProjectModal = ({ title, details, onClose }: ModalProps) => (
  <div className="work-modal-overlay" onClick={onClose}>
    <div className="work-modal" onClick={(e) => e.stopPropagation()}>
      <button className="work-modal-close" onClick={onClose}>✕</button>
      <h3 className="work-modal-title">{title}</h3>
      <p className="work-modal-body">{details}</p>
    </div>
  </div>
);

// --- Single Project Card ---
const ProjectCard = ({ project, index }: { project: typeof config.projects[0]; index: number }) => {
  const [showModal, setShowModal] = useState(false);
  const meta = CATEGORY_META[project.category as WorkCategory];
  const isDesign = project.category === "design";
  const behanceUrl = config.contact.behance;

  return (
    <>
      <div className="work-card">
        <div className="work-card-header">
          <span className="work-card-num">0{index + 1}</span>
          <span className="work-card-badge" style={{ color: meta.accent }}>
            {meta.icon} {meta.label}
          </span>
        </div>
        <h3 className="work-card-title">{project.title}</h3>
        <p className="work-card-tech">{project.technologies}</p>
        <p className="work-card-desc">{project.description}</p>
        <div className="work-card-actions">
          {/* Details button */}
          <button
            className="work-btn work-btn-details"
            onClick={() => setShowModal(true)}
            title="View Details"
          >
            <span className="work-btn-icon">⊹</span>
            Details
          </button>

          {/* Design projects: Behance | Others: GitHub */}
          {isDesign ? (
            <a
              href={behanceUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`work-btn work-btn-behance${!behanceUrl ? " work-btn-disabled" : ""}`}
              aria-disabled={!behanceUrl}
              onClick={(e) => { if (!behanceUrl) e.preventDefault(); }}
              title={behanceUrl ? "View on Behance" : "Behance not available"}
            >
              <svg className="work-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.715 1.9 1.986 1.9.944 0 1.489-.473 1.727-1.27l2.043.699zM15.97 13h4.52c-.07-1.14-.537-1.99-1.943-1.99-1.25 0-2.183.89-2.577 1.99zM9.073 12.064c1.266-.576 1.927-1.603 1.927-3.04 0-2.332-1.615-3.547-3.903-3.547H0v14.044h7.352c2.426 0 4.366-1.39 4.366-3.985 0-1.777-.865-2.977-2.645-3.472zM3.372 8.248H6.2c.913 0 1.545.455 1.545 1.39 0 .968-.69 1.45-1.628 1.45H3.372V8.248zm3.244 7.028H3.372v-2.961h3.2c1.112 0 1.78.482 1.78 1.524 0 1.069-.7 1.437-1.736 1.437z"/>
              </svg>
              Behance
            </a>
          ) : (
            <a
              href={project.github || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`work-btn work-btn-github${!project.github ? " work-btn-disabled" : ""}`}
              aria-disabled={!project.github}
              onClick={(e) => { if (!project.github) e.preventDefault(); }}
              title={project.github ? "View on GitHub" : "GitHub not available"}
            >
              <svg className="work-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}

          {/* Live Demo */}
          <a
            href={project.liveDemo || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`work-btn work-btn-demo${!project.liveDemo ? " work-btn-disabled" : ""}`}
            aria-disabled={!project.liveDemo}
            onClick={(e) => { if (!project.liveDemo) e.preventDefault(); }}
            title={project.liveDemo ? "View Live Demo" : "Live demo not available"}
          >
            <span className="work-btn-icon">↗</span>
            Live Demo
          </a>
        </div>
      </div>

      {showModal && project.details && (
        <ProjectModal
          title={project.title}
          details={project.details}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

// --- Category Section ---
const CategorySection = ({
  category,
  label,
  accent,
}: {
  category: WorkCategory;
  label: string;
  accent: string;
}) => {
  const projects = config.projects.filter((p) => p.category === category);

  return (
    <div className="work-category-section" id={`work-${category}`}>
      <div className="work-category-header">
        <div className="work-category-line" style={{ background: accent }} />
        <h3 className="work-category-label" style={{ color: accent }}>
          {label}
        </h3>
        <div className="work-category-count">{projects.length} project{projects.length !== 1 ? "s" : ""}</div>
      </div>
      <div className="work-cards-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
};

// --- Main Work Component ---
const Work = () => {
  const [activeTab, setActiveTab] = useState<WorkCategory>("ai");

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          {/* Category tab switcher */}
          <div className="work-tabs" role="tablist">
            {(Object.entries(CATEGORY_META) as [WorkCategory, typeof CATEGORY_META.ai][]).map(
              ([key, meta]) => (
                <button
                  key={key}
                  className={`work-tab${activeTab === key ? " work-tab-active" : ""}`}
                  style={activeTab === key ? { borderColor: meta.accent, color: meta.accent } : {}}
                  onClick={() => setActiveTab(key)}
                  role="tab"
                  aria-selected={activeTab === key}
                >
                  <span className="work-tab-icon">{meta.icon}</span>
                  {meta.label}
                </button>
              )
            )}
          </div>
        </div>

        {/* Active category section */}
        <CategorySection
          category={activeTab}
          label={CATEGORY_META[activeTab].label}
          accent={CATEGORY_META[activeTab].accent}
        />
      </div>
    </div>
  );
};

export default Work;
