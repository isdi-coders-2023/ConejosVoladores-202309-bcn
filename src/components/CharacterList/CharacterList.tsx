import { useContext } from "react";
import CharacterListStyled from "./CharacterListStyle";
import CharactersContext from "../../features/characters/Store/CharacterContext";

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
