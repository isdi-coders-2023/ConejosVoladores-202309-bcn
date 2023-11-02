import { CharacterStructure } from "../../features/characters/types";
import { NavLink } from "react-router-dom";

interface CharacterInfoProps {
  character: CharacterStructure;
}

const CharacterInfo = ({
  character: {
    id,
    name,
    availability,
    appears,
    attack,
    imageUrl,
    smashtype,
    series,
  },
}: CharacterInfoProps): React.ReactElement => {
  return (
    <>
      <article className="characterInfo">
        <h2 className="characterInfo">
          <NavLink to={`/character/info/${id}`}>{name} </NavLink>
        </h2>
        <h3 className="characterInfo__name">{name}</h3>
        <img className="characterInfo__image" src={imageUrl} alt="character" />
        <span className="characterInfo__availability">{availability}</span>
        <span className="characterInso__appears">{appears}</span>
        <span className="charcaterInfo__series">{series}</span>
        <span className="characterinfo__attack">{attack}</span>
        <span className="characterinfo__smashtype">{smashtype}</span>
      </article>
    </>
  );
};

export default CharacterInfo;
