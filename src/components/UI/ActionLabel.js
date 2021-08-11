const ActionLabel = ({ children, text, style }) => {
  return (
    <div className={`fund_wallet  ${style}`}>
      <p className="title title-grey">{text}</p>
      {children}
    </div>
  );
};

export default ActionLabel;
