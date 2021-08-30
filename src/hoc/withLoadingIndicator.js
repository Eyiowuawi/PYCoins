import Loader from "react-loader-spinner";

const WithSmallLoader = ({ children, isLoading }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {children}

      <Loader
        type="Oval"
        color="#48d189"
        height={30}
        width={30}
        visible={isLoading}
      />
    </div>
  );
};

export default WithSmallLoader;
