import { CharacterStructure } from "../../features/characters/types";
import CharacterCardContainer from "./CharacterCardStyle";

interface CharacterCardProps {
  character: CharacterStructure;
}

const CharacterCard = ({
  character: { availability, imageUrl, name, attack },
}: CharacterCardProps): React.ReactElement => {
  return (
    <CharacterCardContainer>
      <img
        className="character-card__image"
        src={imageUrl}
        alt={`imagen de ${name}`}
        width="110"
        height="110"
      />
      <div className="character-card__property">
        <h3>{name}</h3>
        <span>{availability}</span>
        <span>{attack}</span>
      </div>
    </CharacterCardContainer>
  );
};
export default CharacterCard;
