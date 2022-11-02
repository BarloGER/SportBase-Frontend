import { useState } from 'react';
import { createTeam } from "../utils/createTeam";
import '../styles/teamCreateForm.css';

function TeamCreateForm({ user }) {

  const [newTeam, setNewTeam] = useState({
    team: '',
    sport: '',
    memberCount: '',
    member: [],
    trainer: '',
    logoUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --------- post newTeam to BackEnd --------------//
  const postData = async () => {
    try {
      const { data } = await createTeam(newTeam);
    } catch (error) {
      console.log(error);
    }
  };

  // --------- set up newTeam --------------//
  const handleSubmit = () => {

    const newTeamObj = { ...newTeam };
    const member = [];
    newTeamObj.trainer = (`${user.firstname} ${user.lastname}`);
    member.push(user);
    newTeamObj.member = [...member];
    newTeamObj.memberCount = newTeamObj.member.length;
    setNewTeam(newTeamObj);

    postData();
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
              name="logoUrl"
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
