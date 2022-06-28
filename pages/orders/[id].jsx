import React from "react";
import styles from "../../styles/Order.module.css";
import paid from "../../public/img/paid1.png";
import checked from "../../public/img/check.png";
import preparing from "../../public/img/baking.png";
import bike from "../../public/img/delivery.png";
import delivery from "../../public/img/delivered.png";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status == 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>24242957925792</span>
              </td>
              <td>
                <span className={styles.name}>David</span>
              </td>
              <td>
                <span className={styles.address}>Yangon</span>
              </td>
              <td>
                <span className={styles.total}>$ 79.60</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src={paid} width={30} height={30} alt="Paid" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src={checked}
                width={30}
                height={30}
                alt="checked"
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src={preparing} width={30} height={30} alt="preparing" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src={checked}
                width={30}
                height={30}
                alt="checked"
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src={bike} width={30} height={30} alt="bike" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src={checked}
                width={30}
                height={30}
                alt="checked"
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src={delivery} width={30} height={30} alt="delivery" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src={checked}
                width={30}
                height={30}
                alt="checked"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount: </b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
