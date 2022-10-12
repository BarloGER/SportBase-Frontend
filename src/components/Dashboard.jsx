import DashboardCard from './DashboardCard';
import "../styles/dashboard.css";


function dashboard() {

  return (
    <main className="dashboard">
      <div className="dashboard-card-container">
        <DashboardCard cardText={'Verfügbare Events'} cardLink={'events'}/>
        <DashboardCard cardText={'Event anlegen'} cardLink={'eventform'}/>
      </div>
    </main>
  )
}

export default dashboard
