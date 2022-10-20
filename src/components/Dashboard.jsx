import { Helmet } from "react-helmet";
import DashboardCard from "./DashboardCard";
import "../styles/dashboard.css";
import { Outlet } from "react-router-dom";

function dashboard() {
  return (
    <main className="dashboard">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
        <meta
          name="description"
          content="Dashboard Seite mit mehreren Komponenten."
        />
      </Helmet>
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
