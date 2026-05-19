"use client";

import styles from "./ExperienceSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    title: "Entrepreneur & Founder",
    subtitle: "Vyntyra Consultancy Services",
    details: "Spearheaded strategic planning, business development, and innovative technology implementation to optimize operations and secure partnerships.",
    date: "Sep 2024 - Present"
  },
  {
    title: "Google Campus Ambassador",
    subtitle: "Google Gemini",
    details: "Representing Google Gemini as an on-site intern in Srikakulam, Andhra Pradesh.",
    date: "May 2026 - Present"
  },
  {
    title: "Professional Instructor",
    subtitle: "Udemy",
    details: "Serving as a Professional Instructor and participating in the Instructor Rookery apprenticeship.",
    date: "May 2025 - Present"
  },
  {
    title: "Student Partner",
    subtitle: "Internshala",
    details: "Engaged in multiple concurrent Internshala Student Partner programs.",
    date: "Jul 2025 - Present"
  },
  {
    title: "LinkedIn Ads Manager",
    subtitle: "LinkedIn (Freelance)",
    details: "Developed and managed impactful LinkedIn marketing ads, significantly increasing CTR and conversions.",
    date: "Jan 2025 - Jun 2025"
  },
];

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <SectionHeading title="Experience" subtitle="A timeline of my professional journey." />
        
        <div className={styles.timelineContainer} ref={containerRef}>
          <motion.div className={styles.timelineLine} style={{ height: lineHeight }} />
          <div className={styles.timelineTrack} />

          {experienceData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <motion.div 
                className={styles.timelineDot}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
              <motion.div 
                className={styles.timelineContent}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.dateBadge}>{item.date}</div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <p className={styles.details}>{item.details}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
