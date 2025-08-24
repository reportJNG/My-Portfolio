import { useState, useEffect } from "react";
import styles from "../Styles/Welcome.module.css";
import monkey from "../assets/me.jpeg"
export default function Welcome() {
  const messages = [
    "Crafting Full-Stack Experiences",
    "Polished Front-End Interfaces",
    "Robust, Scalable Back-End Logic",
    "Fast, Clean & Optimized Code",
    "Built to Be Rock Solid",
    "Websites That Impress and Convert",
    "Let Me Build Your Next Website - Done Right",
    "Freelance"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentMessage.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 30);
      } else {
        // Go to next message
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    
    <div className={styles.typingContainer}>
    <h2 className={styles.staticText}>
      Hey, I'm Remali Hamza — a skilled developer with real experience in 
    </h2>
    <h2 className={`${styles.typedText} ${styles.cursor}`}>
      {displayedText}
    </h2>
  
    <div className={styles.monkeyImageWrapper}>
      <img src={monkey} alt="monkey" />
    </div>
  </div>
  
  );
}
