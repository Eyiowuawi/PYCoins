import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { ToastContainer, Flip } from "react-toastify";
import Pusher from "pusher-js";
import { useEffect, useContext } from "react";
import { AppContext } from "./context/index";

const {
  REACT_APP_PUSHER_APP_ID,
  REACT_APP_PUSHER_APP_KEY,
  REACT_APP_PUSHER_APP_SECRET,
  REACT_APP_PUSHER_APP_CLUSTER,
} = process.env;
function App({ history }) {
  const { environement } = useContext(AppContext);
  useEffect(() => {
    const startPusher = () => {
      const pusher = new Pusher(REACT_APP_PUSHER_APP_KEY, {
        cluster: REACT_APP_PUSHER_APP_CLUSTER,
      });

      const channel = pusher.subscribe(`payment-notification-${environement}`);
      channel.bind("PAYMENT_COMPLETED", (data) => console.log(data));
    };
  }, []);
  return (
    <>
      {renderRoutes(routes)}
      <ToastContainer
        autoClose={5000}
        position="top-right"
        closeOnClick={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        transition={Flip}
      />
    </>
  );
}

export default App;
