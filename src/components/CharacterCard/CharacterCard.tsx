import { CharacterStructure } from "../../features/characters/types";

interface CharacterCardProps {
  character: CharacterStructure;
}

const CharacterCard = ({
  character: { availability, imageUrl, name, smashtype },
}: CharacterCardProps): React.ReactElement => {
  return (
    <div className="card-conteiner">
      <img src={imageUrl} alt={`imagen de ${name}`} />
      <h3>{name}</h3>
      <span>{availability}</span>
      <span>{smashtype}</span>
    </div>
  );
};
export default CharacterCard;
