import cancel from "../../assets/cancel.svg";
const Modal = ({ children, close, show }) => {
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
