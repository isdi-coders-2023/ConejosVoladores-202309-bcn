import HomePageStyled from "./HomePageStyled";

import { useContext, useEffect } from "react";
import mockCharacters from "../../data/mockData";
import characterStructureApiToCharacterStructure from "../../data/apiSmash";
import { CharacterStructure } from "../../features/characters/types";
import CharactersContext from "../../features/characters/store/CharactersContext";
import CharacterList from "../../components/CharacterList/CharacterList";

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
      <h2 className="homepage__title">Characters</h2>
      <CharacterList />
    </HomePageStyled>
  );
};

export default HomePage;
