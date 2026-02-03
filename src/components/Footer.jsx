import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.info}>
          <p>
            <i className={`devicon-google-plain ${styles.icon}`}></i>
            Hamzaremali10@gmail.com
          </p>
          <p>
            <i className={`devicon-debian-plain ${styles.icon}`}></i>
            0774273861
          </p>
        </div>

        <div className={styles.socials}>
          <a
            href="https://x.com/re_hamza77"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-twitter-original colored"></i>
          </a>
          <a
            href="https://www.facebook.com/dex.enjoyer"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-facebook-plain colored"></i>
          </a>
          <a
            href="https://github.com/reportJNG"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original colored"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/as-sky-6b3782375/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-linkedin-plain colored"></i>
          </a>
        </div>

        <p className={styles.copy}>
          &copy; 2025 Hamza Remali. All rights reserved.
        </p>
      </div>
    </div>
  );
}
