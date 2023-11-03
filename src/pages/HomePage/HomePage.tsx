import HomePageStyled from "./HomePageStyled";
import { useEffect } from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import { useCharactersApi } from "../../hooks/useCharactersApi";

const HomePage = (): React.ReactElement => {
  const { loadCharactersApi } = useCharactersApi();
  useEffect(() => {
    (async () => {
      await loadCharactersApi();
    })();
  }, [loadCharactersApi]);

  return (
    <HomePageStyled>
      <h2 className="homepage__title">Characters</h2>
      <CharacterList />
    </HomePageStyled>
  );
};

export default HomePage;
