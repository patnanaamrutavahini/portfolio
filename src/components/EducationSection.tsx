"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./EducationSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";

const educationData = [
  { degree: "BBA, Business Administration", institution: "University of the People", year: "Apr 2026 – Apr 2030", icon: "fa-university", grade: "Current" },
  { degree: "BTech, Artificial Intelligence", institution: "Aditya Institute of Technology", year: "Aug 2024 – Jun 2028", icon: "fa-laptop-code", grade: "Grade: 7.9" },
  { degree: "Certified Career Coach", institution: "ICCC Foundation", year: "Feb 2026", icon: "fa-certificate", grade: "Certified" },
  { degree: "PGDCA, Business Automation", institution: "Brightway Computers", year: "Sep 2022 – Mar 2023", icon: "fa-computer", grade: "Grade: A+" },
  { degree: "Intermediate, MPC", institution: "Mahendra Junior College", year: "Jun 2020 – Mar 2022", icon: "fa-book-open", grade: "Grade: 6.5" },
  { degree: "10th Class", institution: "Zilla Parishad High School", year: "Jun 2016 – Mar 2020", icon: "fa-school", grade: "Grade: 7.2" },
];

export default function EducationSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate slide translation for desktop horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section 
      ref={targetRef} 
      className={isMobile ? styles.educationMobile : styles.educationDesktop} 
      id="education"
    >
      <div className={styles.stickyWrapper}>
        <div className={styles.container}>
          <SectionHeading 
            title="Education" 
            subtitle={isMobile ? "Swipe to explore academic milestones." : "Scroll down to reveal my academic journey."} 
          />
          
          <div className={styles.horizontalTrackWrapper}>
            <motion.div 
              style={isMobile ? {} : { x }} 
              className={styles.horizontalTrack}
            >
              {educationData.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={styles.card}
                  whileHover={isMobile ? {} : { y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={styles.yearWatermark}>
                    {item.year.split(" – ").pop()?.split(" ").pop()}
                  </div>
                  
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className={styles.gradeBadge}>{item.grade}</span>
                  </div>
                  
                  <div className={styles.cardBody}>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <p className={styles.institution}>{item.institution}</p>
                    <span className={styles.yearRange}>{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
