"use client";

import styles from "./EducationSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const educationData = [
  { degree: "BBA, Business Administration", institution: "University of the People", year: "Apr 2026 – Apr 2030", icon: "fa-university", grade: "Current", type: "large" },
  { degree: "BTech, Artificial Intelligence", institution: "Aditya Institute of Technology", year: "Aug 2024 – Jun 2028", icon: "fa-laptop-code", grade: "Grade: 7.9", type: "medium" },
  { degree: "Certified Career Coach", institution: "ICCC Foundation", year: "Feb 2026", icon: "fa-certificate", grade: "Certified", type: "small" },
  { degree: "PGDCA, Business Automation", institution: "Brightway Computers", year: "Sep 2022 – Mar 2023", icon: "fa-computer", grade: "Grade: A+", type: "small" },
  { degree: "Intermediate, MPC", institution: "Mahendra Junior College", year: "Jun 2020 – Mar 2022", icon: "fa-book-open", grade: "Grade: 6.5", type: "medium" },
  { degree: "10th Class", institution: "Zilla Parishad High School", year: "Jun 2016 – Mar 2020", icon: "fa-school", grade: "Grade: 7.2", type: "large" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function EducationSection() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <SectionHeading title="Education" subtitle="Academic milestones mapped in an asymmetric grid." />
        
        <motion.div 
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className={`${styles.bentoCard} ${styles[item.type]}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.iconWrapper}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <div className={styles.meta}>
                  <span className={styles.year}>{item.year}</span>
                  <span className={styles.grade}>{item.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
