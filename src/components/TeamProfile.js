import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { createTeam } from "../utils/createTeam";
import axios from "axios";
import moment from "moment";
import "../styles/account.css";
import Loadingspinner from "./LoadingSpinner";

export default function TeamProfile({ user }) {
  const { id } = useParams();

  const [loggedInUser, setLoggedInUser] = useState(user);
  const [currentTeam, setCurrentTeam] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getTeamById = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/team/${id}`)
      setCurrentTeam(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    checkIfAllowed();
  };

  const checkIfAllowed = () => {
    console.log(`check ${user.firstname} ${user.lastname}`)
    console.log('check trainer', currentTeam.trainer,)

    if (!!user && (currentTeam.trainer === `${user.firstname} ${user.lastname}`)) {
      console.log('checked true')

      setIsAllowed(true);
    } else {
      console.log('checked false')
      setIsAllowed(false);
    }
  };

  const handleJoinTeam = (e) => {
    e.preventDefault();

    if (currentTeam.member.some(m => m._id === user._id)) {
      console.log('you are already part of this team');
    } else if (user.team !== '') {
      console.log('you are already part of an other team');
    } else {
      const updatedTeam = { ...currentTeam };
      updatedTeam.memberCount += 1;
      updatedTeam.member.push(user);
      console.log(updatedTeam);

      const updatedUser = { ...user };
      updatedUser.team = currentTeam.team;
      console.log(updatedUser);
    }
  }

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    console.log("Hoch die Hände, Wochenende");
    const updatedTeam = { ...currentTeam };
    console.log(updatedTeam);
  };

  const loadSpinner = () => {
    return !currentTeam ? true : false;
  };

  useEffect(() => {
    getTeamById();
  }, []);

  return (
    <main className="account">
      {isLoading && <Loadingspinner />}
      <section className="account-container">
        <form className="profile-container" onSubmit={handleUpdateEvent}>
          <div className="left-container">
            <div className="user-image">
              <img
                src={
                  currentTeam.logoUrl
                    ? currentTeam.logoUrl
                    : "https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                }
                alt="Team URL"
              />
              <button className="btn"
                onClick={handleJoinTeam}
              >Verein Beitreten</button>
            </div>
            <div className="user-aboutMe">
              <h2>Über uns</h2>
              <textarea
                type="text"
                name="aboutMe"
                defaultValue={currentTeam.team}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
              ></textarea>
            </div>
          </div>
          <div className="right-container">
            <div className="user-info">
              <input
                type="text"
                name="teamname"
                defaultValue={currentTeam.team}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <input
                type="text"
                name="sport"
                defaultValue={currentTeam.sport}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              {/* <input
                type="text"
                name="team"
                defaultValue={currentTeam.team}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
              ></input> */}
              <input
                type="text"
                name="trainer"
                defaultValue={currentTeam.trainer}
                placeholder="Trainer"
                readOnly={!isAllowed ? "readOnly" : ""}
              ></input>
              <input
                className={isAllowed ? "" : "btn-hidden"}
                type="text"
                name="logoUrl"
                defaultValue={currentTeam.logoUrl}
                placeholder="Vereinslogo"
                readOnly={!isAllowed ? "readOnly" : ""}
              ></input>
              <button
                className={isAllowed ? "btn" : "btn-hidden"}
                disabled={!isAllowed}
              >
                Absenden
              </button>
            </div>
            <div className="event-container">
              <h2>Mitglieder</h2>
              <span><p>aktuell: {currentTeam.memberCount}</p></span>
              {currentTeam.member ? (
                currentTeam.member.map((m) => (
                  <Link to={`/account/${m._id}`} key={m._id}>
                    <p className="event-name">
                      {m.username} {m.firstname} {m.lastname}
                    </p>
                  </Link>
                ))
              ) : (
                <h3>Keine aktiven Member</h3>
              )}
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
