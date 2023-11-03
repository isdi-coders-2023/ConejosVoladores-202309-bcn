import { useCallback } from "react";
import { characterApiToCharacter } from "../data/apiSmash";
import { CharacterStructureApi } from "../features/characters/types";

const apiUrl = import.meta.env.VITE_API_URL;

export const useCharactersApi = () => {
  const getCharacter = useCallback(async () => {
    const response = await fetch(`${apiUrl}/characters`);

    const charactersApi = (await response.json()) as CharacterStructureApi[];

    return charactersApi.map((characterApi) =>
      characterApiToCharacter(characterApi),
    );
  }, []);

  return { loadCharactersApi: getCharacter };
};
