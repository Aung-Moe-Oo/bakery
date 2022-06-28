import Circle from "../components/Circle";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="blueviolet" left="-40vh" top="-40vh" />
      <Circle backgroundColor="yellow" bottom="-20vh" right="-40vh" />
      <h1 className={styles.title}>Get in touch</h1>
      <form action="" className={styles.form}>
        <input type="text" className={styles.inputS} placeholder="Username" />
        <input type="number" className={styles.inputS} placeholder="Phone" />
        <input type="email" className={styles.inputL} placeholder="Email" />
        <input type="text" className={styles.inputL} placeholder="Subject" />
        <textarea
          name=""
          className={styles.textarea}
          placeholder="Messages"
          rows={6}
        ></textarea>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
