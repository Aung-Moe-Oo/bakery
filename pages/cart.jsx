import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/cartSlice";
import { useRouter } from "next/router";
import OrderDetail from "../components/OrderDetail";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [cash, setCash] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);

      if (res.status === 201) {
        router.push(`/orders/${res.data._id}`);
        dispatch(reset());
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      {cart.products.length === 0 ? (
        <h1 className={styles.left}>No Order Here Yet</h1>
      ) : (
        <div className={styles.left}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr className={styles.tr} key={product._id}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image
                        src={product.img}
                        layout="fill"
                        alt="cake"
                        priority="first"
                        objectFit="cover"
                      />
                    </div>
                  </td>
                  <td>
                    <p className={styles.name}>{product.title}</p>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      {product.extras.map((extra) => (
                        <span key={extra._id}> {extra.text}, </span>
                      ))}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>$ {product.price}</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{product.quantity}</span>
                  </td>
                  <td>
                    <span className={styles.total}>
                      $ {product.price * product.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$ {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>$ {cart.total}
          </div>
          {cart.products.length === 0 ? (
            <button disabled className={styles.button}>
              PLEASE ORDER
            </button>
          ) : (
            <button onClick={() => setCash(true)} className={styles.button}>
              CASH ON DELIVERY
            </button>
          )}
        </div>
      </div>
      {cash && (
        <OrderDetail
          back={() => setCash(false)}
          total={cart.total}
          createOrder={createOrder}
        />
      )}
    </div>
  );
};

export default Cart;
