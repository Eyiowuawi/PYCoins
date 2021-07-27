import Cryptocurrency from "../../components/Wallets/CryptoCurrency";
const Wallet = () => {
  return (
    <div className="wallets">
      <h3 className="title title-black">Wallets</h3>
      <div className="wallets_crypto">
        <Cryptocurrency />
      </div>
    </div>
  );
};

export default Wallet;
