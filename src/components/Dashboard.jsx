import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardCard from "./DashboardCard";
import "../styles/dashboard.css";

function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    // <main className="dashboard-section">
    //   <Helmet>
    //     <meta charSet="utf-8" />
    //     <meta
    //       name="description"
    //       content="Dashboard Seite mit mehreren Komponenten."
    //     />
    //   </Helmet>

    /* <div className="sidebar">
        <h2>Navigation</h2>
        
        
        
        
      </div>
      <div className="dashboard-content">
        <Outlet />
      </div> */
    <main className="dashboard">
      <nav className="sidebar">
        <button
          className="hamburger"
          onClick={() => {
            setIsSidebarExpanded(!isSidebarExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className={isSidebarExpanded ? "sidebar expanded" : "sidebar"}>
          <ul className="link">
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
