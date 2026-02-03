import styles from "../Styles/Certificates.module.css";
export default function Certificates() {
  const Info = [
    {
      role: "Database Engineering (Academic Training)",
      company: "Sonatrach",
      location: "Algiers, Algeria",
      duration: "3 years",
      experience: `
          Completed 3 years of academic training at Sonatrach focused on database engineering and backend systems. I learned SQL database design, relational modeling, and query optimization.
      
          Gained hands-on experience with PHP backend development, Java EE for enterprise systems, and basic front-end integration. Also explored OOP, algorithms (C++/Java), and server-side deployment concepts.
      
          The training emphasized real-world logic, secure data handling, and full-stack application structure.
        `,
    },
  ];
  const Openpdf = () => {
    console.log("Pdf Later");
  };

  const show = (obj) => {
    return obj.map((s, index) => (
      <div key={index} className={styles.box}>
        <h5 className={styles.company}>{s.company}</h5>
        <h6 className={styles.role}>{s.role}</h6>
        <i className={styles.duration}>{s.duration}</i>
        <br />
        <i className={styles.location}>
          <span className={styles.flag}>🇩🇿</span> {s.location}
        </i>
        <p className={styles.experience}>{s.experience}</p>
        <button className={styles.btn} onClick={Openpdf}>
          Document
        </button>
      </div>
    ));
  };

  return <div className={styles.container}>{show(Info)}</div>;
}
