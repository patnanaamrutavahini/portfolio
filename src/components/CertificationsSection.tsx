"use client";

import styles from "./CertificationsSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const certData = [
  { title: "Excel Dashboarding in Business Analytics", issuer: "Simplilearn", link: "https://simpli.app.link/UFt6kQ7avQb", date: "2026", color: "cyan" },
  { title: "Human Resources Information Professional", issuer: "HRCP & SHRM", link: "https://www.linkedin.com/learning/certificates/888d8ab9042d09f4d6cfdc5ac61c64d8845ea7827a7c80928d23aed4e0394a6b", date: "2026", color: "purple" },
  { title: "Introduction to IoT", issuer: "Simplilearn", link: "https://simpli.app.link/bGRqsyCavQb", date: "2025", color: "cyan" },
  { title: "LinkedIn Marketing Fundamentals", issuer: "LinkedIn", link: "http://verify.skilljar.com/c/j3mdejy4ewu3", date: "2025", color: "purple" },
  { title: "Explore Core Data Concepts", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/certifications/", date: "2024", color: "cyan" },
  { title: "Entrepreneurship Foundation", issuer: "NASBA", link: "https://www.linkedin.com/learning/certificates/edcb69b64bc16a41137192d0fbb748f323ed7775880498aac34ae311d1201740", date: "2024", color: "purple" },
  { title: "Consultant Job Simulation", issuer: "Forage", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/KJGjQRHZ6eGquTKfF_xhih9yFWsf6AYfngd_WdB5QKKLQWXZeXNrx_1750329003746_completion_certificate.pdf", date: "2024", color: "cyan" },
];

const SpotlightCard = ({ cert }: { cert: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 20 });
  
  const glowXSpring = useSpring(glowX, { stiffness: 150, damping: 25 });
  const glowYSpring = useSpring(glowY, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    
    glowX.set(mouseX);
    glowY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    // Move glow off-screen/center
    glowX.set(-200);
    glowY.set(-200);
  };

  return (
    <div className={styles.perspectiveWrapper} style={{ perspective: 1000 }}>
      <motion.div
        className={`${styles.spotlightCard} ${cert.color === "purple" ? styles.purpleCard : styles.cyanCard}`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className={styles.spotlight}
          style={{ 
            left: glowXSpring, 
            top: glowYSpring,
            transform: "translate(-50%, -50%)"
          }}
        />
        
        <a href={cert.link} target="_blank" rel="noreferrer" className={styles.cardLink}>
          <div className={styles.cardHeader} style={{ transform: "translateZ(20px)" }}>
            <div className={styles.iconWrapper}>
              <i className="fa-solid fa-certificate"></i>
            </div>
            <span className={styles.dateBadge}>{cert.date}</span>
          </div>
          
          <div className={styles.cardBody} style={{ transform: "translateZ(30px)" }}>
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.issuer}>Issued by {cert.issuer}</p>
          </div>
          
          <div className={styles.cardFooter} style={{ transform: "translateZ(20px)" }}>
            <span className={styles.viewLink}>
              View Credential <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default function CertificationsSection() {
  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.container}>
        <SectionHeading title="Certifications" subtitle="Verified credentials with interactive 3D spotlight motion." />
        
        <div className={styles.grid}>
          {certData.map((cert, index) => (
            <SpotlightCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
