import Loader from "react-loader-spinner";
const SmallLoader = ({ isLoading, height, width }) => {
  return (
    <Loader
      type="Oval"
      color="#48d189"
      height={height}
      width={width}
      visible={isLoading}
      // radius={0}
    />
  );
};
export default SmallLoader;
