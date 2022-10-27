import { ROUTES } from "../../routes/routes";

export async function getStaticProps() {
    const response = await fetch(ROUTES.static.characters);
    const characters = await response.json();
    return {
      props: {
        characters,
      },
    };
  }
  
const CharactersProfilePage = (): JSX.Element => {
  return <>TAREA</>;
};

export default CharactersProfilePage;
