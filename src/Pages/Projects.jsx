import styles from '../Styles/Projects.module.css';

export default function Projects() {
    const projects = [
      {
        name: '🏦 Bank App',
        description: 'A full-stack enterprise-level bank app with separate user and admin interfaces for secure and efficient financial operations.',
        buttonText: 'View Live',
        link: 'https://bank-eight-woad.vercel.app/',
      },
      {
        name: '🎲 Dice Game vs Bot',
        description: 'A fully interactive web-based dice game with smooth animations, where players roll dice against a smart bot opponent.',
        buttonText: 'Play Now',
        link: 'https://dice-web-game.vercel.app/',
      },
      {
        name: '🔐 Smart Password Generator',
        description: 'A powerful password generator with secure saving, custom naming, and access to previously used passwords for account management.',
        buttonText: 'Try Now',
        link: 'https://password-generator-tan-iota.vercel.app/',
      },
      {
        name: '🛍️ Enterprise Shop Manager',
        description: 'A high-level shop management system with user dashboards, employee hiring/firing, daily workflow tracking, money management, and premium features for large-scale stores.',
        buttonText: 'Explore App',
        link: 'https://your-shop-manager.com',
      },
      ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Projects</h2>
            {projects.map((p,i)=> 
            <div className={styles.projectCard} key={i}>
        <h3 className={styles.projectName}>{p.name}</h3>
        <div className={styles.centercontainer}>
          <p className={styles.projectDescription}>
           {p.description}
          </p>
          <a href={p.link}>
          <button className={styles.btn}>{p.buttonText}</button></a>
        </div>
      </div>
             )}
    </div>
  );
}
