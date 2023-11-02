import HomePageStyled from "./HomePageStyled";

import { useContext, useEffect } from "react";
import apiCharacters from "../../data/apiData";
import characterStructureApiToCharacterStructure from "../../data/apiSmash";
import { CharacterStructure } from "../../features/characters/types";
import CharactersContext from "../../features/characters/store/CharactersContext";
import CharacterList from "../../components/CharacterList/CharacterList";

const HomePage = (): React.ReactElement => {
  const { loadCharacters } = useContext(CharactersContext);
  useEffect(() => {
    const structuredMockCharacters = apiCharacters.map(
      (character): CharacterStructure => {
        return characterStructureApiToCharacterStructure(character);
      },
    );

    loadCharacters(structuredMockCharacters);
  }, [loadCharacters]);

  return (
    <>
      <HomePageStyled>Characters</HomePageStyled>
      <CharacterList />
    </>
  );
};

export default HomePage;
