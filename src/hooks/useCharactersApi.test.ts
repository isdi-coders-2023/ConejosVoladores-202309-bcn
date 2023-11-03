import { characterStructureApiToCharacterStructure } from "../data/apiSmash";
import mockCharacters from "../mocks/mockData";
import { useCharactersApi } from "./useCharactersApi";

describe("Given a getResponseCheck custom hook", () => {
  describe("When it fetches the url https://smash-characters-api.onrender.com/characters", () => {
    test("Then it should return an array of Characters", async () => {
      const apiCharacters = mockCharacters;

      const expectedCharacters = apiCharacters.map((characterApi) =>
        characterStructureApiToCharacterStructure(characterApi),
      );

      const currentCharacters = await useCharactersApi();

      expect(currentCharacters).toStrictEqual(expectedCharacters);
    });
  });
});
