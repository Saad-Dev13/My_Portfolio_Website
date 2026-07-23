import "./styles/Career.css";
import { config } from "../config";

// Month abbreviation map (3 letters, uppercase)
const MONTH_ABBR: Record<string, string> = {
  January: "JAN", February: "FEB", March: "MAR", April: "APR",
  May: "MAY", June: "JUN", July: "JUL", August: "AUG",
  September: "SEP", October: "OCT", November: "NOV", December: "DEC",
};

/**
 * Converts a period string like "Jul 2025 - Aug 2025" or "Feb 2022 - Present"
 * into the compact format: "JUL 2025 - AUG 2025" or "FEB 2022 - PRESENT"
 */
const formatPeriod = (period: string): string => {
  return period
    .split(" - ")
    .map((part) => {
      if (part === "Present" || part === "Now") return "PRESENT";
      const tokens = part.trim().split(" ");
      if (tokens.length === 2) {
        const [month, year] = tokens;
        const abbr = MONTH_ABBR[month] || month.toUpperCase().slice(0, 3);
        return `${abbr} ${year}`;
      }
      return part.toUpperCase();
    })
    .join(" – ");
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <div className="career-period">
                  {formatPeriod(exp.period)}
                </div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
