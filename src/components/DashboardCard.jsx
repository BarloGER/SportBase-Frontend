import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import '../styles/dashboardCard.css';

function DashboardCard({cardText ,cardLink}) {

  useEffect(() => {},[]);

  return (
    <Link to={`/${cardLink}`}>
      <div className="dashboard-card">
      <div className="card-title">
        {/* <h2>card</h2> */}
        <h2>{cardText}</h2>
      </div>
      </div>
    </Link>
  )
};

export default DashboardCard;
