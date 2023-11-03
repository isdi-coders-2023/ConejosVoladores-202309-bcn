import HomePageStyled from "./HomePageStyled";
import { useContext, useEffect } from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import { useCharactersApi } from "../../hooks/useCharactersApi";
import CharactersContext from "../../features/characters/store/CharactersContext";

const HomePage = (): React.ReactElement => {
  const { loadCharactersApi } = useCharactersApi();
  const { loadCharacters } = useContext(CharactersContext);

  useEffect(() => {
    (async () => {
      const characterss = (await loadCharactersApi()).map((character) => ({
        ...character,
        appears: [...character.appears],
      }));

      loadCharacters(characterss);
    })();
  }, [loadCharacters, loadCharactersApi]);

  return (
    <HomePageStyled>
      <h1 className="homepage__title">Characters</h1>
      <CharacterList />
    </HomePageStyled>
  );
};

export default HomePage;
