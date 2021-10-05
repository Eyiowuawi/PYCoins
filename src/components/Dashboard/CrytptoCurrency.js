import Tether from "../../assets/tether.svg";
import Bitcoin from "../../assets/bitcoin.svg";
import Ethereum from "../../assets/ethereum.svg";

const Cryptocurrency = ({ wallets }) => {
  return (
    <div className="crypto">
      {/* <div className="crypto_item">
        <div className="crypto_img crypto_img-1">
          <img src={Bitcoin} alt="Bitcoin" />
        </div>
        <div className="crypto_content">
          <p className="title title-grey">Bitcoin Wallet</p>
          <p className="title title-grey">0.0000560 BTC</p>
        </div>
      </div>
      <div className="crypto_item">
        <div className="crypto_img crypto_img-2">
          <img src={Ethereum} alt="Bitcoin" />
        </div>
        <div className="crypto_content">
          <p className="title title-grey">Ethereum Wallet</p>
          <p className="title title-grey">0.000001 ETH</p>
        </div>
      </div>
      <div className="crypto_item">
        <div className="crypto_img crypto_img-3">
          <img src={Tether} alt="Bitcoin" />
        </div>
        <div className="crypto_content">
          <p className="title title-grey">Tether Wallet</p>
          <p className="title title-grey">1,060 USD₮</p>
        </div>
      </div> */}

      {wallets?.map((item) => (
        <div className="crypto_item">
          <div className="crypto_img crypto_img-3">
            <img src={item.img} alt="Bitcoin" />
          </div>
          <div className="crypto_content">
            <p className="title title-grey">{item.name} Wallet</p>
            <p className="title title-grey">
              {Math.trunc(item.balance)} {item.symbol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cryptocurrency;
