import { useContext } from "react";
import CharactersContext from "../../features/characters/strore/CharactersContext";

const CharacterList = (): React.ReactElement => {
  const { characters } = useContext(CharactersContext);
  return (
    <ul>
      {characters.map((character) => {
        return <li key={character.id}></li>;
      })}
    </ul>
  );
};
export default CharacterList;
