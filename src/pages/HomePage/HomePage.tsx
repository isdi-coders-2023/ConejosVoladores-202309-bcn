import HomePageStyled from "./HomePageStyled";

import { useContext, useEffect } from "react";
import mockCharacters from "../../data/mockData";
import characterStructureApiToCharacterStructure from "../../data/apiSmash";
import { CharacterStructure } from "../../features/characters/types";
import CharactersContext from "../../features/characters/Store/CharacterContext";

const HomePage = (): React.ReactElement => {
  const { loadCharacters } = useContext(CharactersContext);
  useEffect(() => {
    const structuredMockCharacters = mockCharacters.map(
      (character): CharacterStructure => {
        return characterStructureApiToCharacterStructure(character);
      },
    );

    loadCharacters(structuredMockCharacters);
  }, [loadCharacters]);

  return (
    <HomePageStyled>
      <h2>Characters</h2>
    </HomePageStyled>
  );
};

export default HomePage;
