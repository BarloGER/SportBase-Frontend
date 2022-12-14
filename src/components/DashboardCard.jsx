import { NavLink } from "react-router-dom";

function DashboardCard({ cardText, cardLink, onClick }) {
  return (
    <NavLink onClick={onClick} to={`/secret/dashboard/${cardLink}`}>
      <div className="sidebar-cards">
        <div className="card-title">
          <h2>{cardText}</h2>
        </div>
      </div>
    </NavLink>
  );
}

export default DashboardCard;
