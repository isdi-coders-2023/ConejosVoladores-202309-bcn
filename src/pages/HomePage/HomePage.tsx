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
      loadCharacters(await loadCharactersApi());
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
