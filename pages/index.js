import Head from "next/head";
import axios from "axios";
import CakeList from "../components/CakeList";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";

export default function Home({ cakeList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aung Cake Shop in Myanmar</title>
        <meta name="description" content="Best Cake Shop" />
      </Head>
      <Featured />
      <CakeList cakeList={cakeList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: { cakeList: res.data },
  };
};
