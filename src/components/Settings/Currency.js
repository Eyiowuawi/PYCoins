import Toggle from "./../UI/Switch";
import { useGetUserCryptos } from "./../../query/getCryptos";
import { activateWallet, deactivateWallet } from "../../services/crypto";
import { useMutation, useQueryClient } from "react-query";
import { useMemo, useState } from "react";
import WithLoadingComponent from "./../../hoc/withLoading";
import { toast } from "react-toastify";
import SmallLoader from "./../UI/SmallLoader";
const Currency = () => {
  const [selected, setSelected] = useState("");
  const data = useGetUserCryptos();
  const cryptos = useMemo(() => {
    return data[0].data;
  }, [data]);

  const acceptedCryptos = useMemo(() => {
    return data[1].data;
  }, [data]);
  const queryClient = useQueryClient();

  const isFetching = useMemo(() => {
    return data.some((item) => item.isLoading);
  }, [data]);

  const {
    data: deactivateData,
    mutate: deactivateMutate,
    isLoading: deactivateLoading,
  } = useMutation("deactivate-wallet", (wallet) => deactivateWallet(wallet), {
    onSuccess: (data) => queryClient.invalidateQueries("getusercrypto"),
  });
  const {
    data: activateData,
    mutate: activateMutate,
    isLoading: activateLoading,
  } = useMutation("activate-wallet", (wallet) => activateWallet(wallet), {
    onSuccess: (data) => queryClient.invalidateQueries("getusercrypto"),
  });

  const checkIncludes = (wallet) => {
    return acceptedCryptos?.includes(wallet) ? true : false;
  };

  const handleToggle = (slug) => {
    if (checkIncludes(slug)) deactivateMutate({ wallet: slug });
    else activateMutate({ wallet: slug });
    setSelected(slug);
  };
  return (
    <div className="currency">
      <h3 className="title title-black mb-small">Currency</h3>
      <p className="title title-grey mb-small">
        Enable or disable cyptocurrency you would like to get paid with.
      </p>
      <WithLoadingComponent isLoading={isFetching}>
        <div>
          {cryptos?.map((item) => (
            <div className="currency_item" key={item.uuid}>
              <p className="title title-black">{item.name}</p>
              <Toggle
                slug={item.slug}
                checked={checkIncludes(item.slug)}
                toggleWallet={() => handleToggle(item.slug)}
                disabled={deactivateLoading || activateLoading}
              />
              <SmallLoader
                isLoading={
                  (deactivateLoading || activateLoading) &&
                  item.slug === selected
                }
              />
            </div>
          ))}
        </div>
      </WithLoadingComponent>
    </div>
  );
};

export default Currency;
