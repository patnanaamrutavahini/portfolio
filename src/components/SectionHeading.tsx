import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
      <motion.h2 
        style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: 700, display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
      >
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ 
          width: "60px", 
          height: "4px", 
          background: "linear-gradient(120deg, var(--accent-cyan), var(--accent-purple))", 
          borderRadius: "999px",
          transformOrigin: "left"
        }}
      />
    </div>
  );
}
