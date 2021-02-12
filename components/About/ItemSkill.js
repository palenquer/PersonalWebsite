const ItemSkill = ({text, color}) => {
  return (
    <div className={`flex rounded-full items-center py-0 px-1.5 border-solid border border-${color} w-min mr-2 mb-2`}>
      <div className={`bg-${color} w-3 h-3 rounded-full mr-1`}/>
      <span className="text-sm font-bold">{text}</span>
    </div>
  );
};

export default ItemSkill;
