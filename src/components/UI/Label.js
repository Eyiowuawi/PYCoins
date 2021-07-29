const Label = ({ title, id, onchange, ...props }) => {
  return (
    <div>
      <input id={id} className="label_input" onChange={onchange} {...props} />
      <label htmlFor={id} className="label_label">
        <span></span>
        <p className="title title-grey">{title}</p>
      </label>
    </div>
  );
};

export default Label;
