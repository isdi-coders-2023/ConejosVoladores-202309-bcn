import { useContext, useCallback } from "react";
import { characterApiToCharacter } from "../data/apiSmash";
import { CharacterStructureApi } from "../features/characters/types";
import UiContext from "../features/Ui/store/UiContext";

const apiUrl = import.meta.env.VITE_API_URL;

export const useCharactersApi = () => {
  const { setLoadingStatus } = useContext(UiContext);

  const getCharacter = useCallback(async () => {
    setLoadingStatus(true);

    const response = await fetch(`${apiUrl}/characters?_limit=10`);
    const charactersApi = (await response.json()) as CharacterStructureApi[];

    setLoadingStatus(false);

    return charactersApi.map((characterApi) =>
      characterApiToCharacter(characterApi),
    );
  }, [setLoadingStatus]);

  return { loadCharactersApi: getCharacter };
};
