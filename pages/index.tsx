import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { API_ROUTES, ROUTES } from "../routes/routes";
import { ICharacter } from "../types/character.interface";

interface HomeProps {
  characters: ICharacter[];
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
        {characters.map((character) => {
          return (
            <Link href={ROUTES.character(character.id)} key={character.id}>
              <div>
                <p>{character.name}</p>
                <p>{character.gender}</p>
                <p>{character.status}</p>
                <p>{character.location.name}</p>
              </div>
            </Link>
          );
        })}
      </main>

      <footer className={styles.footer}></footer>
    </div>
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
