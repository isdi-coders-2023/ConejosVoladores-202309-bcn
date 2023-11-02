import { NavLink } from "react-router-dom";
import { CharacterStructure } from "../../features/characters/types";
import CharacterCardContainer from "./CharacterCardStyle";

interface CharacterCardProps {
  character: CharacterStructure;
}

const CharacterCard = ({
  character: { availability, imageUrl, name, attack, id },
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
      <div className="character-card__icon-container">
        <NavLink to={`/character-detail/${id}`}>
          <img
            src={"images/button-info.svg"}
            alt="Home button"
            width="48"
            height="48"
          />
        </NavLink>
        <button>
          <img
            src={"images/button-trash.svg"}
            alt="Add button"
            width="48"
            height="48"
          />
        </button>
        <NavLink to={`/character-edit/${id}`} end>
          <img
            src={"images/button-edit.svg"}
            alt="Add button"
            width="48"
            height="48"
          />
        </NavLink>
      </div>
    </CharacterCardContainer>
  );
};
export default CharacterCard;
