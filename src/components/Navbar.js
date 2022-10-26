import { NavLink } from "react-router-dom";
import { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";
import "../styles/navigation.css";

export default function Navbar(isAuthenticated, logOut, user) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="navigation">
        <a href="/" className="brand-name">
          FP
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
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
        <Search />
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className="nav-link">
            {/* <NavLink
              to="/"
              onClick={() => setIsNavExpanded(false)}
              aria-label="Leitet weiter zur Startseite"
            >
              <li>
                <FontAwesomeIcon
                  className="fontawesomeicon"
                  icon={["fa", "home"]}
                />
              </li>
            </NavLink> */}
            <NavLink
              to="/signin"
              onClick={() => {
                setIsNavExpanded(false);
              }}
              aria-label="Leitet weiter zum SignIn"
            >
              <li>Sign In</li>
            </NavLink>

            <NavLink
              to="/secret/dashboard"
              onClick={() => {
                setIsNavExpanded(false);
              }}
              aria-label="Leitet weiter zum Dashboard"
            >
              <li>Dashboard</li>
            </NavLink>
            <NavLink
              to="/calendar"
              onClick={() => {
                setIsNavExpanded(false);
              }}
              aria-label="Leitet weiter zum Kalender"
            >
              <li>Kalender</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
