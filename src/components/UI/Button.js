const Button = ({ children, onclick, type }) => {
  return (
    <button className="button" onClick={onclick} type={type}>
      {children}
    </button>
  );
};

export default Button;
