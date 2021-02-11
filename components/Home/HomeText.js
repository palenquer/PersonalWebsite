const HomeText = ({ name, text, business }) => {
  return (
    <div>
      <h2 className="text-purple-500 text-3xl font-bold">Hello I'm</h2>
      <h1 className="text-6xl font-Teko font-black text-gray-800">{name}</h1>
      <h3 className="font-semibold text-lg">{business}</h3>
      <h4 className="text-gray-500 text-base">{text}</h4>
    </div>
  );
};

export default HomeText;
