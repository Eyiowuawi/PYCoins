import { Link } from "react-router-dom";
import Tether from "../../assets/tether.svg";
import Bitcoin from "../../assets/bitcoin.svg";
import Ethereum from "../../assets/ethereum.svg";
import Continue from "../../assets/continue.svg";

const Cryptocurrency = ({ wallets }) => {
  return (
    <div className="wallets_crypto-list">
      {wallets?.map((item) => (
        <Link
          to={{
            pathname: "/wallet/crypto",
            search: `?currency=${item.slug}`,
          }}
          className="wallets_crypto-item"
        >
          <div className="wallets_crypto-header">
            <div className="crypto_img crypto_img-2">
              <img src={item.img} alt={item.name} />
            </div>
            <p className="mute">{item.name} Wallet</p>
          </div>
          <div className="wallets_crypto-footer">
            <p className="title title-grey">
              {Math.trunc(item.balance)} {item.symbol}
            </p>
            <img src={Continue} alt="proceed" />
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Cryptocurrency;
