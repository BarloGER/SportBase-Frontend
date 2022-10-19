import DashboardCard from "./DashboardCard";
import "../styles/dashboard.css";
import { Outlet } from "react-router-dom";

function dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-card-container">
        <DashboardCard cardText={"Verfügbare Events"} cardLink={"events"} />
        <DashboardCard cardText={"Event anlegen"} cardLink={"eventform"} />
        <DashboardCard cardText={"Mitglied suchen"} cardLink={"search"} />

        <Outlet />
      </div>
    </main>
  );
}

export default dashboard;
