import { CharacterStructure } from "../features/characters/types";
import { CharacterStructureApi } from "./types";

const characterStructureApiToCharacterStructure = ({
  id,
  name,
  availability,
  alsoAppearsIn,
  smash,
  images,
  series,
}: CharacterStructureApi): CharacterStructure => {
  const characterStructure = {
    id: Number(id),
    name: name,
    availability: availability,
    appears: [...alsoAppearsIn],
    attack: smash.attack,
    smashtype: smash.type,
    imageUrl: images.portrait,
    series: series.name,
  };

  return characterStructure;
};

export default characterStructureApiToCharacterStructure;
