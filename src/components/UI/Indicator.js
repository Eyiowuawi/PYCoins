const Indicator = ({ show_1, show_2 }) => {
  return (
    <div className="indicator ">
      <div className="indicator_item">
        <span className="indicator_item-circle">
          <span></span>
        </span>
        <span className="indicator_item-line">
          <span
            style={show_1 ? { backgroundColor: "#48D189", width: "100%" } : {}}
          ></span>
        </span>
      </div>
      <div className="indicator_item">
        <span className="indicator_item-circle">
          <span style={show_1 ? { backgroundColor: "#48D189" } : {}}></span>
        </span>
        <span className="indicator_item-line">
          <span
            style={show_2 ? { backgroundColor: "#48D189", width: "100%" } : {}}
          ></span>
        </span>
      </div>
      <span className="indicator_item-circle">
        <span style={show_2 ? { backgroundColor: "#48D189" } : {}}></span>
      </span>
    </div>
  );
};

export default Indicator;
