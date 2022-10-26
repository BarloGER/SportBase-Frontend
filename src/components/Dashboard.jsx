import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardCard from "./DashboardCard";
import "../styles/dashboard.css";

function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <main className="dashboard">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Dashboard Seite mit mehreren Komponenten."
        />
      </Helmet>
      <nav className="sidebar">
        <button
          className="sidebar-hamburger"
          onClick={() => {
            setIsSidebarExpanded(!isSidebarExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <h2 className="sidebar-title">Navigation</h2>
        <div
          className={
            isSidebarExpanded ? "sidebar-menu expanded" : "sidebar-menu"
          }
        >
          <ul className="card-container">
            <DashboardCard cardText={"Kalender"} cardLink={"calendar"} />
            <DashboardCard cardText={"Account"} cardLink={"account"} />
            <DashboardCard
              cardText={"Event anlegen"}
              cardLink={"eventMultiForm"}
            />
            <DashboardCard
              cardText={"Verein anlegen"}
              cardLink={"teamCreateForm"}
            />
          </ul>
        </div>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </main>
  );
}

export default Dashboard;
