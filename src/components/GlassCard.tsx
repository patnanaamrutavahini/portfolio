"use client";

import React, { useRef } from "react";
import styles from "./GlassCard.module.css";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`${styles.card} ${className}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.div
        className={styles.borderGlow}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(183, 107, 240, 0.8),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className={styles.glow}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(89, 229, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className={styles.content}>
        {children}
      </div>
    </motion.div>
  );
}
