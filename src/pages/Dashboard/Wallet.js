import Cryptocurrency from "../../components/Wallets/CryptoCurrency";
import { useGetWallets } from "./../../query/getWallets";
import { useMemo } from "react";
import { addClassName } from "./../../utils/addClassName";
import WithLoadingComponent from "./../../hoc/withLoading";
const Wallet = () => {
  const { data: walletData, isLoading } = useGetWallets();

  const wallets = useMemo(() => {
    const mappedWallet = walletData?.map((item) => {
      return {
        ...item,
        ...item.crypto,
      };
    });

    if (mappedWallet?.length > 0) {
      const addedWallet = addClassName(mappedWallet);
      return addedWallet;
    }
  }, [walletData]);

  return (
    <WithLoadingComponent isLoading={isLoading}>
      <div className="wallets">
        <h3 className="title title-black">Wallets</h3>
        <div className="wallets_crypto">
          <Cryptocurrency wallets={wallets} />
        </div>
      </div>
    </WithLoadingComponent>
  );
};

export default Wallet;
