import {
  FaBehance,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes, TbDownload, TbChevronUp } from "react-icons/tb";
import { useEffect, useState, useRef } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        {config.contact.github && (
          <span>
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
        )}
        {config.contact.linkedin && (
          <span>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
        )}
        {config.contact.behance && (
          <span>
            <a href={config.contact.behance} target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
          </span>
        )}
        {config.contact.twitter && (
          <span>
            <a href={config.contact.twitter} target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </span>
        )}
        {config.contact.instagram && (
          <span>
            <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </span>
        )}
      </div>

      {/* Multi-Resume Dropdown Container */}
      <div className="resume-container" ref={dropdownRef}>
        {isResumeOpen && (
          <div className="resume-dropdown">
            <div className="resume-dropdown-title">Select Resume</div>
            {config.resumes.map((res, idx) => (
              <a
                key={idx}
                href={res.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="resume-item"
                onClick={() => setIsResumeOpen(false)}
              >
                <span className="resume-item-icon" style={{ color: res.accent }}>
                  {res.icon}
                </span>
                <span className="resume-item-label">{res.label}</span>
                <TbDownload className="resume-item-dl" />
              </a>
            ))}
          </div>
        )}

        <button
          className={`resume-button ${isResumeOpen ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setIsResumeOpen(!isResumeOpen);
          }}
          type="button"
        >
          <HoverLinks text="RESUME" />
          <span>
            {isResumeOpen ? <TbChevronUp /> : <TbNotes />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
