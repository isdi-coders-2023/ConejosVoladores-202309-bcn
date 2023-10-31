import { useContext } from "react";
import CharactersContext from "../../features/characters/strore/CharactersContext";
import CharacterListSyled from "./CharacterListStyle";

const CharacterList = (): React.ReactElement => {
  const { characters } = useContext(CharactersContext);
  return (
    <CharacterListSyled>
      {characters.map((character) => {
        return <li key={character.id}></li>;
      })}
    </CharacterListSyled>
  );
};
export default CharacterList;
