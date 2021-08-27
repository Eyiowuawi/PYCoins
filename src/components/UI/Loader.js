import Loader from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loading">
      <Loader type="Puff" color="#48d189" height={100} width={100} />
    </div>
  );
};
export default Loading;
