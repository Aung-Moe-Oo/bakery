import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ back, total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay ${total} after delivery</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            placeholder="eg. Aung Aung"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="eg.09123123123"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Full Address</label>
          <input
            type="text"
            placeholder="eg.ABC Road #777 Yangon"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={back}>
            Back
          </button>
          <button className={styles.button} onClick={handleClick}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
