import { Link } from "react-router-dom";


import '../styles/dashboardCard.css';

function DashboardCard({cardText ,cardLink}) {

  return (
    <Link to={`/${cardLink}`}>
      <div className="dashboard-card">
      <div className="card-title">
        <h2>{cardText}</h2>
      </div>
      </div>
    </Link>
  )
};

export default DashboardCard;
