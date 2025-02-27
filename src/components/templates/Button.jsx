const Button = ({ func, buttonStyle, name }) => {
  return (
    <button onClick={func} className={`font-poppins ${buttonStyle}`}>
      {name}
    </button>
  );
};

export default Button;
