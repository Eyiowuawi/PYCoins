import { renderRoutes } from "react-router-config";
const PaymentPageLayout = ({ route }) => {
  return renderRoutes(route.routes);
};

export default PaymentPageLayout