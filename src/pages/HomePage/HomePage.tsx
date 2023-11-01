import { useContext, useEffect } from "react";
import mockCharacters from "../../data/mockData";
import CharactersContext from "../../features/characters/strore/CharactersContext";
import characterStructureApiToCharacterStructure from "../../data/apiSmash";
import { CharacterStructure } from "../../features/characters/types";

const HomePage = (): React.ReactElement => {
  const structuredMockCharacters = mockCharacters.map(
    (character): CharacterStructure => {
      return characterStructureApiToCharacterStructure(character);
    },
  );
  const { loadCharacters } = useContext(CharactersContext);

  useEffect(
    () => loadCharacters(structuredMockCharacters),
    [structuredMockCharacters, loadCharacters],
  );

  return <h2>Characters</h2>;
};

export default HomePage;
