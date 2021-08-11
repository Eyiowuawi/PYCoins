import Sidebar from "./Sidebar";
const MobileSidebar = ({close}) => {
  return (
    <div className="mobilesidebar" onClick={close}>
      <Sidebar close={close} />
    </div>
  );
};

export default MobileSidebar;
