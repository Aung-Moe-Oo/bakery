import Image from "next/image";
// import cake1 from "../public/img/cake1.jpg";
// import cake2 from "../public/img/cake2.jpg";
// import cake3 from "../public/img/cake3.jpg";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  // const images = [cake1, cake2, cake3];
  const images = [
    "https://i.ibb.co/HNTRCjR/cake1.jpg",
    "https://i.ibb.co/9TP6tCY/cake2.jpg",
    "https://i.ibb.co/Lr5tnzP/cake3.jpg",
  ];
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: "50px" }}
        onClick={() => handleArrow("l")}
      >
        <BsArrowLeftCircle size={50} />
      </div>
      <div className={styles.textContainer}>
        <h1>Delicious Cakes with Discount!</h1>
      </div>
      <div
        className={styles.wrapper}
        style={{
          transform: `translateX(${-100 * index}vw)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.imgContainer}>
            <Image
              src={img}
              alt="img"
              layout="fill"
              priority="first"
              className={styles.img}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: "0" }}
        onClick={() => handleArrow("r")}
      >
        <BsArrowRightCircle size={50} />
      </div>
    </div>
  );
};

export default Featured;
