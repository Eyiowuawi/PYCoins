import cancel from "../../assets/cancel.svg";
const Modal = ({ children, close }) => {
  return (
    <div className="modal">
      <div className="modal_container">
        {children}
        <div className="modal_close" onClick={() => close(false)}>
          <img src={cancel} alt="Close Modal" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
