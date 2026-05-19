"use client";

import styles from "./CertificationsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const certData = [
  { title: "Excel Dashboarding in Business Analytics", issuer: "Simplilearn", link: "https://simpli.app.link/UFt6kQ7avQb", date: "2026" },
  { title: "Human Resources Information Professional", issuer: "HRCP & SHRM", link: "https://www.linkedin.com/learning/certificates/888d8ab9042d09f4d6cfdc5ac61c64d8845ea7827a7c80928d23aed4e0394a6b", date: "2026" },
  { title: "Introduction to IoT", issuer: "Simplilearn", link: "https://simpli.app.link/bGRqsyCavQb", date: "2025" },
  { title: "LinkedIn Marketing Fundamentals", issuer: "LinkedIn", link: "http://verify.skilljar.com/c/j3mdejy4ewu3", date: "2025" },
  { title: "Explore Core Data Concepts", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/certifications/", date: "2024" },
  { title: "Entrepreneurship Foundation", issuer: "NASBA", link: "https://www.linkedin.com/learning/certificates/edcb69b64bc16a41137192d0fbb748f323ed7775880498aac34ae311d1201740", date: "2024" },
  { title: "Consultant Job Simulation", issuer: "Forage", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/KJGjQRHZ6eGquTKfF_xhih9yFWsf6AYfngd_WdB5QKKLQWXZeXNrx_1750329003746_completion_certificate.pdf", date: "2024" },
];

export default function CertificationsSection() {
  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.container}>
        <SectionHeading title="Certifications" subtitle="Verified achievements stacked for clarity." />
        
        <div className={styles.stackContainer}>
          {certData.map((cert, index) => (
            <motion.div 
              key={index}
              className={styles.stackedCardWrapper}
              style={{ top: `calc(15vh + ${index * 25}px)` }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <a href={cert.link} target="_blank" rel="noreferrer" className={styles.stackedCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <i className="fa-solid fa-certificate"></i>
                  </div>
                  <span className={styles.dateBadge}>{cert.date}</span>
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.title}>{cert.title}</h3>
                  <p className={styles.issuer}>Issued by {cert.issuer}</p>
                </div>
                
                <div className={styles.cardFooter}>
                  <span className={styles.viewLink}>View Credential <i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
