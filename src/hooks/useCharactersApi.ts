import {
  characterStructureApiToCharacterStructure,
  getCharacters,
} from "../data/apiSmash";
import {
  CharacterStructure,
  CharacterStructureApi,
} from "../features/characters/types";

export const useCharactersApi = async (): Promise<CharacterStructure[]> => {
  const response = await getCharacters();

  if (!response.ok) {
    return [];
  }

  const charactersApi = (await response.json()) as CharacterStructureApi[];

  const characters = charactersApi.map((characterApi) =>
    characterStructureApiToCharacterStructure(characterApi),
  );

  return characters;
};
