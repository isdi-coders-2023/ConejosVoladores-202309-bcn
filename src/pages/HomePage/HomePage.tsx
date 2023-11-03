import HomePageStyled from "./HomePageStyled";
import { useContext, useEffect } from "react";
import apiCharacters from "../../data/apiData";
import { CharacterStructure } from "../../features/characters/types";
import CharactersContext from "../../features/characters/store/CharactersContext";
import CharacterList from "../../components/CharacterList/CharacterList";
import { characterStructureApiToCharacterStructure } from "../../data/apiSmash";

const HomePage = (): React.ReactElement => {
  const { loadCharacters } = useContext(CharactersContext);
  useEffect(() => {
    const structuredMockCharacters = apiCharacters.map(
      (character): CharacterStructure =>
        characterStructureApiToCharacterStructure(character),
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
