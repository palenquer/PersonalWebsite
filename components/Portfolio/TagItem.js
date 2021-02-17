const TagItem = ({name}) => {
  return (
    <div className="h-8 flex justify-center items-center rounded-lg p-2 bg-purple-600 text-sm mr-2 mb-2">
      <h3>{name}</h3>
    </div>
  );
};

export default TagItem;