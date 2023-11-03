import { useContext } from "react";
import CharacterListStyled from "./CharacterListStyle";
import CharactersContext from "../../features/characters/store/CharactersContext";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = (): React.ReactElement => {
  const { characters } = useContext(CharactersContext);
  return (
    <CharacterListStyled>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </CharacterListStyled>
  );
};
export default CharacterList;
