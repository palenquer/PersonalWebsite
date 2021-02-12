const UserInfo = ({info, text}) => {
  return (
    <div className="flex mb-2">
      <span className="w-6/12 font-semibold">{info}</span>
      <span className="w-6/12 text-xs text-gray-500">{text}</span>
    </div>
  );
};

export default UserInfo;
