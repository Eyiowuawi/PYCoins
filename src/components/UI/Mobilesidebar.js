import Sidebar from "./Sidebar";
const MobileSidebar = ({close}) => {
  return (
    <div className="modal" onClick={close}>
      <Sidebar close={close} />
      {/* <div className="mobilesidebar_bg"></div> */}
    </div>
  );
};

export default MobileSidebar;
