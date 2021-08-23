import { useContext } from "react";
import { AppContext } from "../context";
import { Redirect } from "react-router-dom";

const withRegistrationType = (Component) => (props) => {
  const { register } = useContext(AppContext);

  return register !== "" ? (
    <Component {...props} />
  ) : (
    <Redirect to="/auth/create" />
  );
};

export default withRegistrationType;
