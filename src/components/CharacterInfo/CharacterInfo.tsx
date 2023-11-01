import { CharacterStructure } from "../../features/characters/types";
import { NavLink } from "react-router-dom";

interface CharacterInfoProps {
  character: CharacterStructure;
}

const CharacterInfo = ({
  character: { id, name, availability, attack, imageUrl },
}: CharacterInfoProps): React.ReactElement => {
  return (
    <>
      <article className="characterInfo">
        <h2 className="characterInfo">
          <NavLink to={`/character/info/${id}`}>{name} </NavLink>
        </h2>
        <span className="characterInfo__availability">{availability}</span>
        <span className="characterinfo__attack">{attack}</span>
        <img className="characterInfo__image" src={imageUrl} alt="character" />
      </article>
    </>
  );
};

export default CharacterInfo;
