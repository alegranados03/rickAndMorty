import { ICharacter } from "../types/character.interface";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ROUTES } from "../routes/routes";
interface ICharacterCardProps {
  character: ICharacter;
}
const CharacterCard = ({ character }: ICharacterCardProps) => {
  return (
    <div
      className={`card ${styles.custom_card} ${styles.card_gray} ${styles.text_white}`}
      key={character.id}
    >
      <Link href={ROUTES.character(character.id)}>
        <Image
          src={character.image}
          alt={character.name}
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
};

export default CharacterCard;
