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
  console.log(characters);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Rick & Morty App</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.custom_grid}`}>
          {characters.map((character) => {
            return (
              <div className={`card ${styles.custom_card}`} key={character.id}>
                <Link href={ROUTES.character(character.id)}>
                  <Image
                    src={character.image}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                  />
                </Link>
                <div className={styles.card_information}>
                  <div className={styles.card_section}>
                    <Link
                      className={styles.card_title}
                      href={ROUTES.character(character.id)}
                    >
                      <h2>{character.name}</h2>
                    </Link>
                    <span className={styles.text_gray}>Species</span>
                    <p>
                      {character.status} - {character.species}
                    </p>
                  </div>
                  <div className={styles.card_section}>
                    <span className={styles.text_gray}>Origin</span>
                    <p>{character.origin.name}</p>
                  </div>
                </div>
              </div>
            );
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
