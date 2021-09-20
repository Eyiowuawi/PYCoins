import Loader from "react-loader-spinner";
const SmallLoader = ({ isLoading }) => {
  return (
    <Loader
      type="Oval"
      color="#48d189"
      height={30}
      width={30}
      visible={isLoading}
    />
  );
};
export default SmallLoader;
