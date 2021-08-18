import Sidebar from "./Sidebar";
const MobileSidebar = ({close}) => {
  return (
    <div className="mobilesidebar" onClick={close}>
      <Sidebar close={close} />
      {/* <div className="mobilesidebar_bg"></div> */}
    </div>
  );
};

export default MobileSidebar;
