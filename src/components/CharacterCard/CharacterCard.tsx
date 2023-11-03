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
        width="110"
        height="110"
      />
      <div className="character-card__property">
        <h3>{name}</h3>
        <span>{availability}</span>
        <span>{attack}</span>
      </div>
      <div className="icon-container">
        <NavLink aria-label="info" to={`/`}>
          <img
            src={"images/button-info.svg"}
            alt="Go to character details"
            width="48"
            height="48"
            className="icon-container__image"
          />
        </NavLink>
        <NavLink aria-label="trash" to={`/`}>
          <img
            src={"images/button-trash.svg"}
            alt="Eliminate character"
            width="48"
            height="48"
            className="icon-container__image"
          />
        </NavLink>
        <NavLink aria-label="edit" to={`/`}>
          <img
            src={"images/button-edit.svg"}
            alt="Go to edit character"
            width="48"
            height="48"
            className="icon-container__image"
          />
        </NavLink>
      </div>
    </CharacterCardStyled>
  );
};
export default CharacterCard;
