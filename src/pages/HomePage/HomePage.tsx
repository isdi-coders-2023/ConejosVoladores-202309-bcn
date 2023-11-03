import HomePageStyled from "./HomePageStyled";
import { useEffect } from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import { useCharactersApi } from "../../hooks/useCharactersApi";
import { useContext } from "react";
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
      <h2 className="homepage__title">Characters</h2>
      <CharacterList />
    </HomePageStyled>
  );
};

export default HomePage;
