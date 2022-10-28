import { IEpisode } from "../types/episode.interface";
import styles from "../styles/Home.module.css";
interface IEpisodeCardProps {
  episode: IEpisode;
}
const EpisodeCard = ({ episode }: IEpisodeCardProps) => {
  return (
    <div
      key={episode.id}
      className={`${styles?.card_information} ${styles?.card_gray}`}

    >
      <h4
        className={styles.card_title}
      >{`${episode?.episode} - ${episode?.name}`}</h4>
      <p>{episode?.air_date}</p>
    </div>
  );
};

export default EpisodeCard;
