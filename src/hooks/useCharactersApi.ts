import { useCallback } from "react";
import { characterApiToCharacter } from "../data/apiSmash";
import { CharacterStructureApi } from "../features/characters/types";
import { useContext } from "react";
import UiContext from "../features/Ui/store/UiContext";

const apiUrl = import.meta.env.VITE_API_URL;

export const useCharactersApi = () => {
  const { loadLoading } = useContext(UiContext);

  const getCharacter = useCallback(async () => {
    loadLoading(true);

    const response = await fetch(`${apiUrl}/characters?_limit=10`);
    const charactersApi = (await response.json()) as CharacterStructureApi[];

    loadLoading(false);

    return charactersApi.map((characterApi) =>
      characterApiToCharacter(characterApi),
    );
  }, [loadLoading]);

  return { loadCharactersApi: getCharacter };
};
