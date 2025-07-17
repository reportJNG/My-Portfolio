import styles from '../Styles/Skill.module.css'
export default function Skill (){
    const language = [
        { name: 'HTML', years: '3 Years', icon: 'devicon-html5-plain' },
        { name: 'CSS', years: '3 Years', icon: 'devicon-css3-plain' },
        { name: 'JavaScript', years: '2 Years', icon: 'devicon-javascript-plain' },
        { name: 'SQL', years: '2 Years', icon: 'devicon-mysql-plain' },
        { name: 'PHP', years: '2 Years', icon: 'devicon-php-plain' },
        { name: 'C++', years: '2 Years', icon: 'devicon-cplusplus-plain' },
        { name: 'Pascal', years: '2 Years', icon: 'devicon-c-plain' }, // close enough fallback
        { name: 'React', years: '1 Years', icon: 'devicon-react-original' },
        { name: 'Node.js', years: '1 Years', icon: 'devicon-nodejs-plain' },
        { name: 'MongoDB', years: '1 Years', icon: 'devicon-mongodb-plain' },
        { name: 'Python', years: '1 Years', icon: 'devicon-python-plain' },
        { name: 'Java', years: '1 Years', icon: 'devicon-java-plain' },
        { name: 'Lua', years: '1 Years', icon: 'devicon-lua-plain' } // real icon available now
      ];
      
      
      const skill = [
        { name: 'Installing/Configuring Software', years: '10Years', icon: 'devicon-debian-plain' }, // as installer feel
        { name: 'Linux Tools', years: '3 Years', icon: 'devicon-linux-plain' },
        { name: 'Windows & Linux OS', years: '3 Years', icon: 'devicon-windows8-original' },
        { name: 'File Systems & Backups', years: '3 Years', icon: 'devicon-docker-plain' }, // not perfect, but close feel
        { name: 'Virtual Machines (VMs)', years: '3 Years', icon: 'devicon-vagrant-plain' },
        { name: 'Git', years: '2 Years', icon: 'devicon-git-plain' },
        { name: 'System Troubleshooting', years: '2 Years', icon: 'devicon-linux-plain' }, // fallback to Linux again
        { name: 'Command Line (Bash)', years: '2 Years', icon: 'devicon-bash-plain' },
        { name: 'PC Maintenance & Cleanup', years: '2 Years', icon: 'devicon-linux-plain' }, // again, similar context
        { name: 'Typing & Productivity Tools', years: '2 Years', icon: 'devicon-vscode-plain' }, // VS Code ≈ productivity
        { name: 'Networking Basics', years: '1 Years', icon: 'devicon-nginx-original' } // nginx = close enough
      ];
      
      
      
    return(
<div className={styles.bigcontainer}>
  <div className={styles.language}>
    <h1>My Languages</h1>
    <div className={styles.grid}>
      {language.map((l, i) => (
        <div className={styles.container} key={i}>
          <i className={l.icon}></i>
          <div className={styles.txt}>
            <span>{l.name}</span>
            <span>{l.years}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className={styles.skill}>
    <h1>My Skills </h1>
    <div className={styles.grid}>
      {skill.map((s, i) => (
        <div className={styles.container} key={i}>
          <i className={s.icon}></i>
          <div className={styles.txt}>
            <span>{s.name}</span>
            <span>{s.years}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        
    )
}