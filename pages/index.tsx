import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Main from "../components/main";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>
      <div className={styles.main}>
        <Main />
      </div>
    </div>
  );
};

export default Home;
