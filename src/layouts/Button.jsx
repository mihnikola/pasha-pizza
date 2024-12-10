
const Button = ({ title }) => {
  return (
    <button className="sm:max-w-[200px] max-w-[200px] text-black bg-yellow-400 font-semibold px-5 py-2 rounded-md hover:bg-yellow-300 transition duration-200 ease-linear">
      {title}
    </button>
  );
};

export default Button;
