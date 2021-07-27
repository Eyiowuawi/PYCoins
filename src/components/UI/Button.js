const Button = ({ children, onclick, type, bg }) => {
  return (
    <button className={["button", bg].join(" ")} onClick={onclick} type={type}>
      {children}
    </button>
  );
};

export default Button;
