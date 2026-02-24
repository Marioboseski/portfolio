const SkillCard = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 text-black transition-transform hover:scale-110">
      <img src={image} alt={name} className="w-full max-w-[50px]"/>
      <p>{name}</p>
    </div>
  );
}

export default SkillCard;