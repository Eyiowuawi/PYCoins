const Button = ({ children, onclick, type, bg, disabled }) => {
  return (
    <button
      disabled={!disabled}
      className={["button", bg].join(" ")}
      onClick={onclick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
