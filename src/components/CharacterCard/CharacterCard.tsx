import { NavLink } from "react-router-dom";
import { CharacterStructure } from "../../features/characters/types";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterCardProps {
  character: CharacterStructure;
}

const CharacterCard = ({
  character: { availability, imageUrl, name, attack },
}: CharacterCardProps): React.ReactElement => {
  return (
    <CharacterCardStyled>
      <img
        className="character-card__image"
        src={imageUrl}
        alt={`${name}`}
        width="165"
        height="165"
      />
      <div className="character-card__property">
        <h3>{name}</h3>
        <span>{availability}</span>
        <span>{attack}</span>
      </div>
      <div className="character-card__icon-container">
        <NavLink to={`/`}>
          <img
            src={"images/button-info.webp"}
            alt="Go to character details"
            width="72"
            height="72"
            className="character-card__icon-container__image"
          />
        </NavLink>
        <button>
          <img
            src={"images/button-trash.webp"}
            alt="Eliminate character"
            width="72"
            height="72"
            className="character-card__icon-container__image"
          />
        </button>
        <NavLink to={`/`} end>
          <img
            src={"images/button-edit.webp"}
            alt="Go to edit character"
            width="72"
            height="72"
            className="character-card__icon-container__image"
          />
        </NavLink>
      </div>
    </CharacterCardStyled>
  );
};
export default CharacterCard;
