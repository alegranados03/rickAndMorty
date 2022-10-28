import { API_ROUTES, ROUTES } from "../../routes/routes";
import { ICharacter } from "../../types/character.interface";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { IEpisode } from "../../types/episode.interface";
import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const response = await fetch(API_ROUTES.dynamics.character(id));
  const character: ICharacter = await response.json();
  const episodeIds = character.episode.map((episode) => {
    const splitString = episode.split("/");
    return +splitString[splitString.length - 1];
  });
  const episodes = await (
    await fetch(API_ROUTES.dynamics.episodes(episodeIds))
  ).json();

  return { props: { character, episodes } };
}

interface CharacterProfileProps {
  character: ICharacter;
  episodes: IEpisode[];
}

const CharactersProfilePage = ({
  character,
  episodes,
}: CharacterProfileProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`${character.name}`} | Rick & Morty App</title>
      </Head>
      <div className={`${styles.container} ${styles.dark_background}`}>
        <div className="d-flex">
          <Link
            href={ROUTES.index}
            className={`btn ${styles.text_white} ${styles.card_title}`}
          >
            Go Back
          </Link>
        </div>
        <div className={`card p-3 ${styles.card_gray} ${styles.text_white}`}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={character.image}
              alt="Picture of the author"
              width={300}
              height={300}
              style={{ borderRadius: "100%" }}
            />
          </div>
          <h2>
            {" "}
            <span className={styles.text_gray}>Name: </span>
            {character.name}
          </h2>
          <p>
            <span className={styles.text_gray}>Gender: </span>
            {character.gender}
          </p>
          <p>
            <span className={styles.text_gray}>Status: </span>
            {character.status}
          </p>
          <p>
            <span className={styles.text_gray}>Origin: </span>
            {character.location.name}
          </p>
          <div style={{ marginTop: "1em" }}>
            <h2>List of episodes</h2>
            <div
              className={`${styles.custom_grid} ${styles.grid_auto_rows_5} ${styles.dark_background}`}
            >
              {episodes.map((episode) => {
                return (
                  <div
                    key={episode.id}
                    className={`${styles.card_information} ${styles.card_gray}`}
                    style={{ padding: "1em" }}
                  >
                    <h4
                      className={styles.card_title}
                    >{`${episode.episode} - ${episode.name}`}</h4>
                    <p>{episode.air_date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharactersProfilePage;
