import { useState } from "react";
import "./styles/Certificates.css";
import { config, Certificate } from "../config";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { TbCertificate, TbChevronDown, TbChevronUp, TbEye } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CertCategory = "all" | "aiml" | "fullstack" | "design" | "other";

const CATEGORY_META: Record<CertCategory, { label: string; accent: string; icon: string }> = {
  all:       { label: "All Certificates", accent: "#ffffff", icon: "❖" },
  aiml:      { label: "AI & ML",         accent: "#c481ff", icon: "✦" },
  fullstack: { label: "Full Stack",      accent: "#81d4ff", icon: "⬡" },
  design:    { label: "Design",          accent: "#ff81c4", icon: "◈" },
  other:     { label: "Other",           accent: "#ffd481", icon: "✧" },
};

// Image Modal component for certificate viewing
interface ImageModalProps {
  title: string;
  imageSrc: string;
  onClose: () => void;
}

const CertImageModal = ({ title, imageSrc, onClose }: ImageModalProps) => (
  <div className="cert-modal-overlay" onClick={onClose}>
    <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
      <button className="cert-modal-close" onClick={onClose}>
        <MdClose />
      </button>
      <h3 className="cert-modal-title">{title}</h3>
      <div className="cert-modal-image-wrap">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  </div>
);

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CertCategory>("all");
  const [activeModalImage, setActiveModalImage] = useState<{ title: string; src: string } | null>(null);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  if (!config.certificates || config.certificates.length === 0) return null;

  const filteredCerts = config.certificates.filter((cert: Certificate) => {
    if (selectedCategory === "all") return true;
    return cert.category === selectedCategory;
  });

  return (
    <div className="certificates-section" id="certificates">
      <div className="certificates-container section-container">
        {/* Accordion Header */}
        <div
          className={`certificates-accordion-header ${isOpen ? "is-open" : ""}`}
          onClick={handleToggle}
          data-cursor="disable"
        >
          <div className="accordion-title-wrap">
            <span className="accordion-icon"><TbCertificate /></span>
            <h2>
              Licenses <span>&</span> Certificates
            </h2>
            <span className="accordion-count-badge">
              {config.certificates.length}
            </span>
          </div>

          <button className="accordion-toggle-btn" type="button">
            <span>{isOpen ? "Hide Certificates" : "Explore Certificates"}</span>
            {isOpen ? <TbChevronUp /> : <TbChevronDown />}
          </button>
        </div>

        {/* Collapsible Content Body */}
        {isOpen && (
          <div className="certificates-body">
            {/* Category Filter Tabs */}
            <div className="certificates-tabs" role="tablist">
              {(Object.entries(CATEGORY_META) as [CertCategory, typeof CATEGORY_META.all][]).map(
                ([key, meta]) => {
                  const count = key === "all" 
                    ? config.certificates.length 
                    : config.certificates.filter(c => c.category === key).length;

                  return (
                    <button
                      key={key}
                      className={`cert-tab${selectedCategory === key ? " cert-tab-active" : ""}`}
                      style={selectedCategory === key ? { borderColor: meta.accent, color: meta.accent } : {}}
                      onClick={() => setSelectedCategory(key)}
                      role="tab"
                      aria-selected={selectedCategory === key}
                    >
                      <span className="cert-tab-icon">{meta.icon}</span>
                      {meta.label}
                      <span className="cert-tab-count">({count})</span>
                    </button>
                  );
                }
              )}
            </div>

            {/* Certificate Cards Grid */}
            <div className="certificates-grid">
              {filteredCerts.map((cert: Certificate, idx: number) => {
                const meta = CATEGORY_META[cert.category || "other"];

                return (
                  <div key={idx} className="certificate-card">
                    <div>
                      <div className="certificate-card-top">
                        <span className="certificate-badge" style={{ color: meta.accent }}>
                          {meta.icon} {meta.label}
                        </span>
                        <span className="certificate-date">{cert.date}</span>
                      </div>

                      {cert.issuer && (
                        <div className="certificate-issuer">{cert.issuer}</div>
                      )}

                      <h3 className="certificate-title">{cert.title}</h3>

                      {cert.description && (
                        <p className="certificate-desc">{cert.description}</p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="certificate-actions">
                      {/* View Certificate Image button */}
                      <button
                        type="button"
                        className={`cert-btn cert-btn-view${!cert.image ? " cert-btn-disabled" : ""}`}
                        disabled={!cert.image}
                        onClick={() => {
                          if (cert.image) {
                            setActiveModalImage({ title: cert.title, src: cert.image });
                          }
                        }}
                        title={cert.image ? "View Certificate" : "Certificate image not available"}
                      >
                        <TbEye className="cert-btn-icon" />
                        View Certificate
                      </button>

                      {/* Validate Link button */}
                      <a
                        href={cert.credentialUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cert-btn cert-btn-validate${!cert.credentialUrl ? " cert-btn-disabled" : ""}`}
                        aria-disabled={!cert.credentialUrl}
                        onClick={(e) => {
                          if (!cert.credentialUrl) e.preventDefault();
                        }}
                        title={cert.credentialUrl ? "Validate Credential" : "Link not available"}
                      >
                        <MdArrowOutward className="cert-btn-icon" />
                        Validate
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      {activeModalImage && (
        <CertImageModal
          title={activeModalImage.title}
          imageSrc={activeModalImage.src}
          onClose={() => setActiveModalImage(null)}
        />
      )}
    </div>
  );
};

export default Certificates;
