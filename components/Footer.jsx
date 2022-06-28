import styles from "../styles/Footer.module.css";
import Image from "next/image";
import shop from "../public/img/shop.jpg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={shop} alt="shop" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            BAKE THE BEST CAKES! MAKE THEM SWEET AND DELICIOUS LIKE HEAVEN ITSELF!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR SHOPS</h1>
          <p className={styles.text}>
            1234 MM Road #123.
            <br /> Yangon, Myanmar
            <br />
            (95)9123456789
          </p>
          <p className={styles.text}>
            ABC Road #124.
            <br /> Mandalay, Myanmar
            <br />
            (95)9123456788
          </p>
          <p className={styles.text}>
            DEF Road #125.
            <br /> Bago, Myanmar
            <br />
            (95)9123456787
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br />
            7:00 - 20:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            9:00 - 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
