const IconWithName = ({ iconName, label }) => {
  return (
    <div className="flex items-center gap-1 justify-center w-fit">
      <i
        className={`${iconName}`}
        style={{ color: "#01afd1", fontSize: "15px" }}
      ></i>
      <div className="text-[12px] ">{label}</div>
    </div>
  );
};

export default IconWithName;
