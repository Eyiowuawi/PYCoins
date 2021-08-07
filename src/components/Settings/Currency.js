import Toggle from "./../UI/Switch";
const Currency = () => {
  return (
    <div className="currency">
      <h3 className="title title-black mb-small">Currency</h3>
      <p className="title title-grey mb-small">
        Enable or disable cyptocurrency you would like to get paid with.
      </p>
      <div className="mt-small currency_items">
        <div className="currency_item">
          <p>Bitcoin</p>
          <Toggle />
        </div>
        <div className="currency_item">
          <p>Ethereum</p>
          <Toggle />
        </div>
        <div className="currency_item">
          <p>Tether</p>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Currency;
