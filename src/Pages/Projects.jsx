import styles from '../Styles/Projects.module.css';

export default function Projects() {
    const projects = [
        {
          name: '💻 Portfolio Website',
          description: 'A responsive React portfolio showcasing my skills, animation, and smooth scroll SPA layout.',
          buttonText: 'View Live',
          link: 'https://your-portfolio.com',
        },
        {
          name: '📦 E-Commerce Store',
          description: 'Full-stack MERN app with product catalog, cart, Stripe checkout, and admin dashboard.',
          buttonText: 'View GitHub',
          link: 'https://github.com/yourusername/ecommerce-store',
        },
        {
          name: '🛠️ Task Manager App',
          description: 'A simple to-do and productivity app with React + Node.js, MongoDB backend, and auth.',
          buttonText: 'View Code',
          link: 'https://github.com/yourusername/task-manager',
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
