import { useContext } from "react";
import CharactersContext from "../../features/characters/strore/CharactersContext";
import CharacterListStyled from "./CharacterListStyle";

const CharacterList = (): React.ReactElement => {
  const { characters } = useContext(CharactersContext);
  return (
    <CharacterListStyled>
      {characters.map((character) => {
        return <li key={character.id}></li>;
      })}
    </CharacterListStyled>
  );
};
export default CharacterList;
