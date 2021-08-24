const PersonalIndicator = ({indicate}) => (
  <div className="indicator " style={{ width: "50%" }}>
    <div className="indicator_item">
      <span className="indicator_item-circle">
        <span></span>
      </span>
      <span className="indicator_item-line">
        <span
          style={indicate ? { backgroundColor: "#48D189", width: "100%" } : {}}
        ></span>
      </span>
    </div>

    <span className="indicator_item-circle">
      <span style={indicate ? { backgroundColor: "#48D189" } : {}}></span>
    </span>
  </div>
);

export default PersonalIndicator;
