"use client";

import { useRef, useEffect } from "react";
import styles from "./HeroSection.module.css";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Mouse Tracking Orb Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to the center of the screen
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const name = "JAMI ESWAR ANIL KUMAR";
  const nameArray = name.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, scale: 3, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 150, damping: 15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 100, damping: 15, delay: 1.5 }
    }
  };

  return (
    <header className={styles.hero} id="hero" ref={ref}>
      
      {/* Interactive Glowing Orb */}
      <motion.div 
        className={styles.glowingOrb}
        style={{ x: springX, y: springY }}
      />
      <div className={styles.gridOverlay} />

      <motion.div 
        className={styles.content} 
        style={{ opacity: opacityText, scale: scaleText }}
      >
        <motion.p 
          className={styles.eyebrow}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Entrepreneur • Founder • Human Resources
        </motion.p>
        
        <motion.h1 
          className={styles.title} 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {nameArray.map((letter, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants}
              style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : "normal" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          AI · Human Resources · Data Analytics · Marketing · Business Consultant
        </motion.p>
        
        <motion.p 
          className={styles.tagline}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Building human-centered organizations by marrying HR intelligence with AI-driven growth, marketing, and advisory services.
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button 
            className={styles.primaryBtn} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discover more
          </motion.button>
          <motion.a 
            className={styles.outlineBtn} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:jamianil37@gmail.com"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}
