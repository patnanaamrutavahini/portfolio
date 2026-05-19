"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setStatus("Please fill in the required fields.");
      return;
    }
    const whatsappNumber = "916301588867";
    const whatsappText = `Hi Jami, I'm ${name} (${email}). ${message ? `Project details: ${message}` : ""}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    
    setStatus("Opening WhatsApp...");
    window.open(whatsappUrl, "_blank");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <SectionHeading title="Get in touch" subtitle="Let's collaborate on Human Resources, AI, or marketing journeys." />
        
        <div className={styles.grid}>
          <motion.article 
            className={styles.infoCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Future-ready teams start here</h3>
            <p>
              I help founders and Human Resources leaders blend empathy, data, and AI so you can design people programs that scale.
            </p>
            
            <div className={styles.stats}>
              <div>
                <strong>24h</strong>
                <span>Response</span>
              </div>
              <div>
                <strong>30</strong>
                <span>Students guided</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Active partnerships</span>
              </div>
            </div>

            <ul className={styles.metaList}>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:jamianil37@gmail.com">jamianil37@gmail.com</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+916301588867">+91 63015 88867</a>
              </li>
              <li>
                <i className="fa-solid fa-briefcase"></i>
                <span>Based in Srikakulam · Remote friendly</span>
              </li>
            </ul>
          </motion.article>

          <motion.form 
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.fieldGrid}>
              <label>
                Name
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Your name" 
                  required 
                />
              </label>
              <label>
                Email
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="your@email.com" 
                  required 
                />
              </label>
            </div>
            <label>
              Project details
              <textarea 
                rows={4} 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Tell me about your project"
              ></textarea>
            </label>
            <div className={styles.formActions}>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
              <span className={styles.formNote}>I typically reply within one business day.</span>
            </div>
            {status && <p className={styles.statusMessage}>{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
