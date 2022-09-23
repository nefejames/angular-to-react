import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Tasks from "../components/Tasks/Tasks";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Task Tracker</title>
      </Head>

      <div className="container">
        <Header />
        <main>
          <Tasks />
        </main>
        <Footer />
      </div>
    </div>
  );
}
