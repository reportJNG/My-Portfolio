import styles from './Topnavbar.module.css';

export default function Topnavbar({ handleDownload }) {
  return (
    <nav className={styles.topNav}>
      <h3 className={styles.name}>
        {['R', 'X', '_', 'H', 'A', 'M', 'Z', 'A'].map((char, i) => (
          <span key={i} className={styles.nameLetter}>{char}</span>
        ))}
      </h3>

      <ul className={styles.navList}>
        <li><a href="#welcome" className={styles.navLink}>Welcome</a></li>
        <li><a href="#about" className={styles.navLink}>About Me</a></li>
        <li><a href="#projects" className={styles.navLink}>Projects</a></li>
        <li><a href="#skills" className={styles.navLink}>Skills</a></li>
        <li><a href="#certificates" className={styles.navLink}>Certificates</a></li>
        <li><a href="#footer" className={styles.navLink}>Contact</a></li>
        <li>
          <button onClick={handleDownload} className={styles.navLink} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            Download It
          </button>
        </li>
      </ul>
    </nav>
  );
}
