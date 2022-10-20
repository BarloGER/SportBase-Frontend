import DashboardCard from "./DashboardCard";
import "../styles/dashboard.css";
import { Outlet } from "react-router-dom";

function dashboard() {
  return (
    <main className="dashboard">
      <div className="sidebar">
        <DashboardCard cardText={"Event anlegen"} cardLink={"eventMultiForm"} />
        <DashboardCard cardText={"Account"} cardLink={"account"} />
        <Outlet />
      </div>
      <div className="dashboard-content"></div>
    </main>
  );
}

export default dashboard;
