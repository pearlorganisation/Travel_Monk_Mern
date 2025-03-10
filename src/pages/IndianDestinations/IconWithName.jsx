const IconWithName = ({ iconName, label }) => {
  return (
    <div className="flex items-center gap-1 justify-center w-fit">
      <img src={iconName} />
      <div className="text-xs ">{label}</div>
    </div>
  );
};

export default IconWithName;
