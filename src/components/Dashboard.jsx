import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardCard from "./DashboardCard";
import "../styles/dashboard.css";
import LoadingSpinner from "./LoadingSpinner";

function Dashboard({ user }) {
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
      {!user ? <LoadingSpinner /> : ""}
      <nav className="sidebar">
        <button
          className="sidebar-hamburger"
          onClick={() => {
            setIsSidebarExpanded(!isSidebarExpanded);
          }}
        >
          {!isSidebarExpanded ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          )}
        </button>
        <h2 className="sidebar-title">Navigation</h2>
        <div
          className={
            isSidebarExpanded ? "sidebar-menu expanded" : "sidebar-menu"
          }
        >
          {user ? (
            <ul className="card-container">
              <h2 className="sidebar-title">Navigation</h2>
              <DashboardCard
                onClick={() => {
                  setIsSidebarExpanded(false);
                }}
                cardText={"Kalender"}
                cardLink={"calendar"}
              />
              <DashboardCard
                onClick={() => {
                  setIsSidebarExpanded(false);
                }}
                cardText={"Account"}
                cardLink={`account/${user._id}`}
              />
              <DashboardCard
                onClick={() => {
                  setIsSidebarExpanded(false);
                }}
                cardText={"Event anlegen"}
                cardLink={"eventMultiForm"}
              />
              <DashboardCard
                onClick={() => {
                  setIsSidebarExpanded(false);
                }}
                cardText={"Verein anlegen"}
                cardLink={"teamCreateForm"}
              />
            </ul>
          ) : (
            " "
          )}
        </div>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </main>
  );
}

export default Dashboard;
