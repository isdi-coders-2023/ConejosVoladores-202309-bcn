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
        <NavLink to={`/character-details/${id}/`}>
          <img
            src={"images/button-info.webp"}
            alt="Go to character details"
            width="48"
            height="48"
            className="character-card__icon-container__image"
          />
        </NavLink>
        <button>
          <img
            src={"images/button-trash.webp"}
            alt="Eliminate character"
            width="48"
            height="48"
            className="character-card__icon-container__image"
          />
        </button>
        <NavLink to={`/character-edit/${id}/`} end>
          <img
            src={"images/button-edit.webp"}
            alt="Go to edit character"
            width="48"
            height="48"
            className="character-card__icon-container__image"
          />
        </NavLink>
      </div>
    </CharacterCardContainer>
  );
};
export default CharacterCard;
