const ActionLabel = ({ children, text, style }) => {
  return (
    <div className={`fund_wallet  ${style}`}>
      <p>{text}</p>
      {children}
    </div>
  );
};

export default ActionLabel;
