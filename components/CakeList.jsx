import styles from "../styles/CakeList.module.css";
import CakeCard from "./CakeCard";

const CakeList = ({ cakeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Cake Shop in Town</h1>
      <p className={styles.desc}>
        Our talented chefs are always trying new flavors, textures, and
        presentations to please every customer&apos;s needs. They combine
        creativity with attention to detail so they can create cakes that will
        satisfy any craving while fitting each person&apos;s personal
        preferences. Through tasting the finished product at every stage of
        production and being passionate about fulfilling people&apos;s cravings
        for sweets, we&apos;re able to come up with a cake that everyone will
        love!
      </p>
      <div className={styles.wrapper}>
        {cakeList.map((cake) => (
          <CakeCard key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default CakeList;
