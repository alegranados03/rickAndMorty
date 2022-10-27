import { API_ROUTES, ROUTES } from "../../routes/routes";
import { ICharacter } from "../../types/character.interface";


export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const response = await fetch(API_ROUTES.dynamics.character(id));
  const character = await response.json();

  return { props: { character } };
}

interface CharacterProfileProps {
  character: ICharacter;
}

const CharactersProfilePage = ({
  character,
}: CharacterProfileProps): JSX.Element => {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.gender}</p>
      <p>{character.status}</p>
      <p>{character.location.name}</p>
    </div>
  );
};

export default CharactersProfilePage;
