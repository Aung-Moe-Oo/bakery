import Image from "next/image";
import logo from "../public/img/Aung.png";
import styles from "../styles/Navbar.module.css";
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link href="/" passHref>
          <a className={styles.logoSmall}>
            <Image width="150px" height="90px" src={logo} alt="aung" />
          </a>
        </Link>
        <div className={styles.callButton}>
          <FaPhone size={30} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>09123456789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href="/" passHref>
            <a>
              <Image width="150px" height="90px" src={logo} alt="aung" />
            </a>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <div className={styles.counter}>{quantity}</div>
            <FaShoppingCart size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
