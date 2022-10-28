import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { API_ROUTES } from "../routes/routes";
import { ICharacter } from "../types/character.interface";
import CharacterCard from "../components/CharacterCard";
import { useState } from "react";

interface HomeProps {
  characters: ICharacter[];
}

export default function Home({ characters }: HomeProps) {
  const [charactersArray] = useState(characters);

  return (
    <>
      <div className={`${styles.container} ${styles.dark_background}`}>
        <Head>
          <title>Rick & Morty App</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.index_titantron}>
          <Image
            alt="Rick and Morty"
            src="/rickandmorty.png"
            width={1000}
            height={300}
          />
        </div>
        <main className={styles.custom_grid}>
          {charactersArray.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(API_ROUTES.static.characters);
  const { results: characters } = await response.json();

  return {
    props: {
      characters,
    },
  };
}
