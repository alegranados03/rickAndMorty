import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ROUTES } from "../routes/routes";

interface HomeProps {
  characters: {};
}
export default function Home({ characters }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick & Morty App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Link href="/characters/1">1</Link> */}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(ROUTES.static.characters);
  const characters = await response.json();
  return {
    props: {
      characters,
    },
  };
}
