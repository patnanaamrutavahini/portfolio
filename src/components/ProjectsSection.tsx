"use client";

import styles from "./ProjectsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Accenture Nordics Job Simulation",
    description: "AI-enabled HR consulting sprint with inclusive marketing narratives.",
    tags: ["AI", "HR Analytics"],
  },
  {
    title: "Human-First Consultancy Sprint",
    description: "People analytics rollout for founders balancing empathy and efficiency.",
    tags: ["Consultancy", "Culture"],
  },
  {
    title: "Employer Brand Campaigns",
    description: "Scaled LinkedIn content strategy and ad suites for APAC clients.",
    tags: ["Marketing", "LinkedIn"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <SectionHeading title="Projects" subtitle="Accenture Nordics Job Simulation & more." />
        
        <motion.div 
          className={styles.carousel}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, index) => (
            <motion.article 
              key={index}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardInner}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
