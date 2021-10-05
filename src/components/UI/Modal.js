import cancel from "../../assets/cancel.svg";
import { useEffect } from "react";
const Modal = ({ children, close, show }) => {
  useEffect(() => {
    // if (show) document.body.style.position = "fixed";
    // else document.body.style.position = "relative";
  }, [show]);

  return (
    <div className="modal">
      <div className={`modal_container `}>
        {children}
        <div className="modal_close" onClick={close}>
          <img src={cancel} alt="Close Modal" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
