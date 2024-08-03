const Tooltip = ({ label, children }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute top-full mt-2 flex-col justify-center items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-[13px] font-medium leading-none text-black whitespace-nowrap bg-white shadow-lg rounded-md">
          {label}
        </span>
        <div className="w-3 h-3 -mt-8 rotate-45 bg-white"></div>
      </div>
    </div>
  );
};

export default Tooltip;
