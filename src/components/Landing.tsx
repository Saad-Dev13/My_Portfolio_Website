import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  const titles = config.developer.titles;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setAnimating(false);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {" "}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>A</h3>
            {/* Animated primary title */}
            <h2 className="landing-info-h2">
              <div
                className={`landing-title-primary ${animating ? "landing-title-exit" : "landing-title-enter"}`}
                key={currentIndex}
              >
                {titles[currentIndex]}
              </div>
            </h2>
            {/* Secondary title hints (other 2 titles shown faded) */}
            <div className="landing-title-hints">
              {titles
                .filter((_, i) => i !== currentIndex)
                .map((t, i) => (
                  <span key={i} className="landing-title-hint">
                    {t}
                  </span>
                ))}
            </div>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="/images/mypicnbg.png" alt={config.developer.fullName} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
