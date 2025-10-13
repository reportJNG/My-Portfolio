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
      {
        name: '🌐 Discord Community Site',
        description: 'A modern website built to showcase our Discord server, featuring event announcements, community highlights, and a direct invite link for users to join and participate.',
        buttonText: 'Visit Site',
        link: 'https://algerian-discored.vercel.app/',
      },
      {
         name: '📝 NotePad',
        description: 'A simple, modern, and distraction-free notepad app. Create, organize, and save notes easily, with a sidebar to view all your files and quick access to editing.',
        buttonText: 'Try it',
        link: 'https://notepad-azure-xi.vercel.app//'
      },
      {
        name: '🎮 Guess the Word Game',
        description: 'An interactive word-guessing game where players challenge their vocabulary skills to uncover the hidden word through clues and logic.',
        buttonText: 'Play Now',
        link: 'https://abrain.vercel.app/',
      },{
        name: '🍽️ Syrian Delights',
        description: 'A modern web experience showcasing authentic Syrian cuisine, menus, and reviews — bringing the rich flavors of Syria right to your screen.',
        buttonText: 'View Menu',
        link: 'https://syrien.vercel.app/',
      },
      {
        name: '🥩 Meet & Meat',
        description: 'A premium meat and BBQ restaurant website with smoky vibes, menu highlights, and location details for a true carnivore’s experience.',
        buttonText: 'Explore',
        link: 'https://meet-meat-alg.vercel.app/',
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
