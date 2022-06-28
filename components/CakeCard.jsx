import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CakeCard.module.css";

const CakeCard = ({ cake }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${cake._id}`} passHref>
        <a>
          <Image
            className={styles.img}
            src={cake.img}
            width={500}
            height={500}
            objectFit="contain"
            alt="cake"
          />
        </a>
      </Link>
      <h1 className={styles.title}>{cake.title}</h1>
      <span className={styles.price}>${cake.prices[0]}</span>
      <p className={styles.desc}>{cake.desc}</p>
    </div>
  );
};

export default CakeCard;
