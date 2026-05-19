"use client";

import styles from "./ToolsSection.module.css";
import SectionHeading from "./SectionHeading";

const toolsData = [
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "React", icon: "fab fa-react" },
  { name: "Next.js", icon: "fa-brands fa-js" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "GitHub Pages", icon: "fa-solid fa-server" },
  { name: "Firebase", icon: "fa-solid fa-fire" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Android Studio", icon: "fab fa-android" },
  { name: "Google Cloud", icon: "fa-solid fa-cloud" },
];

export default function ToolsSection() {
  // Duplicate tools array for seamless infinite scroll
  const toolsList = [...toolsData, ...toolsData];
  const toolsListReversed = [...toolsData].reverse();
  const toolsListReversedDouble = [...toolsListReversed, ...toolsListReversed];

  return (
    <section className={styles.tools} id="tools">
      <div className={styles.container}>
        <SectionHeading title="Tools on Replay" subtitle="1 year of focused expertise across this stack." />
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeWrapper}>
            <div className={styles.track}>
              {toolsList.map((tool, index) => (
                <div key={index} className={styles.chip}>
                  <i className={tool.icon}></i>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
            {/* Clone track for infinite scrolling */}
            <div className={styles.track} aria-hidden="true">
              {toolsList.map((tool, index) => (
                <div key={index} className={styles.chip}>
                  <i className={tool.icon}></i>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.marqueeWrapper} style={{ marginTop: "1.5rem" }}>
            <div className={`${styles.track} ${styles.trackReverse}`}>
              {toolsListReversedDouble.map((tool, index) => (
                <div key={index} className={styles.chip}>
                  <i className={tool.icon}></i>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
             <div className={`${styles.track} ${styles.trackReverse}`} aria-hidden="true">
              {toolsListReversedDouble.map((tool, index) => (
                <div key={index} className={styles.chip}>
                  <i className={tool.icon}></i>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
