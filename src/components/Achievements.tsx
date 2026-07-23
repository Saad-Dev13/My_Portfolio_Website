import { useState, useEffect, useRef } from "react";
import "./styles/Achievements.css";
import { config } from "../config";
import { TbChevronDown, TbChevronUp, TbTrophy } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const localTriggersRef = useRef<ScrollTrigger[]>([]);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      // Clear previous local triggers if any
      localTriggersRef.current.forEach((st) => st.kill());
      localTriggersRef.current = [];

      const items = document.querySelectorAll(".achievement-item");
      items.forEach((item) => {
        const anim = gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
        if (anim.scrollTrigger) {
          localTriggersRef.current.push(anim.scrollTrigger);
        }
      });

      // Animate line growth
      const line = document.querySelector(".achievements-timeline-progress");
      if (line) {
        const lineAnim = gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".achievements-list",
              start: "top 75%",
              end: "bottom 85%",
              scrub: 1,
            },
          }
        );
        if (lineAnim.scrollTrigger) {
          localTriggersRef.current.push(lineAnim.scrollTrigger);
        }
      }
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Kill ONLY local triggers created by this component, NEVER global triggers!
      localTriggersRef.current.forEach((st) => st.kill());
      localTriggersRef.current = [];
      ScrollTrigger.refresh();
    };
  }, [isOpen]);

  if (!config.achievements || config.achievements.length === 0) return null;

  return (
    <div className="achievements-section" id="achievements" ref={sectionRef}>
      <div className="achievements-container section-container">
        {/* Click to expand/collapse header */}
        <div
          className={`achievements-accordion-header ${isOpen ? "is-open" : ""}`}
          onClick={handleToggle}
          data-cursor="disable"
        >
          <div className="accordion-title-wrap">
            <span className="accordion-icon"><TbTrophy /></span>
            <h2>
              Key <span>Achievements</span>
            </h2>
            <span className="accordion-count-badge">
              {config.achievements.length}
            </span>
          </div>

          <button className="accordion-toggle-btn" type="button">
            <span>{isOpen ? "Hide Achievements" : "Explore Achievements"}</span>
            {isOpen ? <TbChevronUp /> : <TbChevronDown />}
          </button>
        </div>

        {/* Collapsible body */}
        {isOpen && (
          <div className="achievements-body">
            <div className="achievements-list">
              <div className="achievements-timeline-bg"></div>
              <div className="achievements-timeline-progress"></div>

              {config.achievements.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`achievement-item ${isEven ? "left-text" : "right-text"}`}
                  >
                    {/* Content Box */}
                    <div className="achievement-content">
                      <div className="achievement-year">{item.year}</div>
                      <h3 className="achievement-title">{item.title}</h3>
                      <p className="achievement-desc">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="achievement-tags">
                          {item.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="achievement-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Node Dot */}
                    <div className="achievement-node">
                      <div className="node-inner"></div>
                    </div>

                    {/* Media/Image Box */}
                    <div className="achievement-media">
                      {item.image ? (
                        <div className="achievement-image-wrapper">
                          <img src={item.image} alt={item.title} />
                          <div className="achievement-image-overlay"></div>
                        </div>
                      ) : (
                        <div className="achievement-placeholder">
                          <span className="placeholder-icon">🏆</span>
                          <span className="placeholder-title">{item.title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
