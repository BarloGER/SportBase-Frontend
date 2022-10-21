import { useState } from 'react';
import '../styles/teamCreateForm.css';

function TeamCreateForm() {

  const [newTeam, setNewTeam] = useState({
    team: '',
    sport: '',
    MemberCount: '',
    trainer: '',
    logoUrl: '',
    createdAt: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newTeamObj = { ...newTeam };
    //newTeamObj.trainer = currentUser.firstname + ' ' + currentUser.lastname
    newTeamObj.createdAt = new Date().toISOString();

    setNewTeam(newTeamObj);
    alert(`Verein ${newTeam.team} gegründet`);
  };

  return (
    <section className='create-team-section'>
      <h2>Team erstellen</h2>
      <form className='form'>
        <div className="input-container">
          <label htmlFor="team">
            Name des Verein:
            <input type="text"
              name="team"
              placeholder='Name des Verein'
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="sport">
            Sportart:
            <input type="text"
              name="sport"
              placeholder='Sportart'
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="logo">
            Logo URL
            <input type="text"
              name="logo"
              placeholder='Logo URL einfügen'
              onChange={(e) => handleInputChange(e)}
            />
          </label>
        </div>
      </form>
      <button className='btn'
        onClick={() => { handleSubmit() }}
      >
        Absenden
      </button>
    </section>
  )
}

export default TeamCreateForm;
