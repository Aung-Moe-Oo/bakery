import styles from "../../styles/Product.module.css";
import { GiStairsCake } from "react-icons/gi";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ cake }) => {
  const [price, setPrice] = useState(cake.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleSize = (sizeIndex) => {
    const difference = cake.prices[sizeIndex] - cake.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  console.log(extras);

  const handleClick = () => {
    dispatch(addProduct({ ...cake, extras, price, quantity }));
  };

  // const cake = {
  //   id: 1,
  //   img: cake1,
  //   name: "Strawberry Cake",
  //   price: [29.9, 31.9, 33.9],
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, tempora.",
  // };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={cake.img} alt="cake" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{cake.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{cake.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div
            className={styles.size}
            onClick={() => {
              handleSize(0);
            }}
          >
            <GiStairsCake size={35} />
            <span className={styles.number}>Small</span>
          </div>
          <div
            className={styles.size}
            onClick={() => {
              handleSize(1);
            }}
          >
            <GiStairsCake size={40} />
            <span className={styles.number}>Medium</span>
          </div>
          <div
            className={styles.size}
            onClick={() => {
              handleSize(2);
            }}
          >
            <GiStairsCake size={45} />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {cake.extraOption.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option._id}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double"> {option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            min="1"
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://aung-bakery.vercel.app/api/products/${params.id}`
  );
  return {
    props: { cake: res.data },
  };
};

export default Product;
