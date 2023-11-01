import { CharacterStructure } from "../features/characters/types";
import { CharacterStructureApi } from "./types";

const characterStructureApiToCharacterStructure = ({
  id,
  name,
  availability,
  alsoAppearsIn,
  smash,
  images,
}: CharacterStructureApi): CharacterStructure => {
  const characterStructure = {
    id: Number(id),
    name: name,
    availability: availability,
    appears: [...alsoAppearsIn],
    attack: smash.attack,
    smashtype: smash.type,
    imageUrl: images.portrait,
  };

  return characterStructure;
};

export default characterStructureApiToCharacterStructure;
