import Sidebar from "../components/UI/Sidebar";
import Header from "../components/UI/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <Sidebar />
        <div className="dashboard_content">
          <Header />
          <main className="main">
            <div className="main_container">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
