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

      <main className={`three-column-grid`}>
        {characters.map((character) => {
          return (
            // <Link href={ROUTES.character(character.id)} key={character.id}>
            <div className="card card-image-container" style={{ width: "90%" }} key={character.id}>
              <div className={styles.card_image_container}>

              <Image
                src={character.image}
                alt="Picture of the author"
                width={200}
                height={200}
    
              />
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            // </Link>
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
