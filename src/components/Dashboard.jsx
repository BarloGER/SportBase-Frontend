import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import "../styles/dashboard.css";

function dashboard() {
  return (
    <main className="dashboard-section">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Dashboard Seite mit mehreren Komponenten."
        />
      </Helmet>
      <div className="sidebar">
        <h2>Navigation</h2>
        <DashboardCard cardText={"Kalender"} cardLink={"calendar"} />
        <DashboardCard cardText={"Account"} cardLink={"userprofiles"} />
        <DashboardCard cardText={"Event anlegen"} cardLink={"eventMultiForm"} />
        <DashboardCard
          cardText={"Verein anlegen"}
          cardLink={"teamCreateForm"}
        />
      </div>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </main>
  );
}

export default dashboard;
