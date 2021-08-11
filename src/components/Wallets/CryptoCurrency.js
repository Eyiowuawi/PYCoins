import { Link } from "react-router-dom";
import Tether from "../../assets/tether.svg";
import Bitcoin from "../../assets/bitcoin.svg";
import Ethereum from "../../assets/ethereum.svg";
import Continue from "../../assets/continue.svg";

const Cryptocurrency = () => {
  return (
    <div className="wallets_crypto-list">
      <Link
        to={{
          pathname: "/wallet/crypto",
          search: "?currency=Bitcoin",
        }}
        className="wallets_crypto-item"
      >
        <div className="wallets_crypto-header">
          <div className="crypto_img crypto_img-1">
            <img src={Bitcoin} alt="Bitcoin" />
          </div>
          <p className="mute">Bitcoin Wallet</p>
        </div>
        <div className="wallets_crypto-footer">
          <p className="title title-grey">0.0000560 BTC</p>
          <img src={Continue} alt="proceed" />
        </div>
      </Link>
      <Link
        to={{
          pathname: "/wallet/crypto",
          search: "?currency=Ethereum",
        }}
        className="wallets_crypto-item"
      >
        <div className="wallets_crypto-header">
          <div className="crypto_img crypto_img-2">
            <img src={Ethereum} alt="Ethereum" />
          </div>
          <p className="mute">Ethereum Wallet</p>
        </div>
        <div className="wallets_crypto-footer">
          <p className="title title-grey">0.000001 ETH</p>
          <img src={Continue} alt="proceed" />
        </div>
      </Link>
      <Link
        to={{
          pathname: "/wallet/crypto",
          search: "?currency=Tether",
        }}
        className="wallets_crypto-item"
      >
        <div className="wallets_crypto-header">
          <div className="crypto_img crypto_img-3">
            <img src={Tether} alt="Tether" />
          </div>
          <p className="mute">Tether Wallet</p>
        </div>
        <div className="wallets_crypto-footer">
          <p className="title title-grey">1,060 USD₮</p>
          <img src={Continue} alt="proceed" />
        </div>
      </Link>
    </div>
  );
};
export default Cryptocurrency;
