import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "../styles/account.css";
import Loadingspinner from "./LoadingSpinner";

export default function TeamProfile() {
  const { id } = useParams();

  //   const [loggedInUser, setLoggedInUser] = useState(user);
  const [currentTeam, setCurrentTeam] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getTeam = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/team`);
      setCurrentTeam(data.find((team) => team._id === id));
      const temp = data.find((team) => team._id === id);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  const loadSpinner = () => {
    return !currentTeam ? true : false;
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    console.log("Hoch die Hände, Wochenende");
  };

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
              <button className="btn">Verein Beitreten</button>
            </div>
            <div className="user-aboutMe">
              <h2>Über uns</h2>
              <br />
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
              <br />
              <input
                type="text"
                name="sport"
                defaultValue={currentTeam.sport}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <br />
              <input
                type="text"
                name="team"
                defaultValue={currentTeam.team}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
              ></input>
              <br />
              <input
                type="text"
                name="trainer"
                defaultValue={currentTeam.trainer}
                placeholder="Trainer"
                disabled={!isAllowed}
              ></input>
              <br />
              <button
                className={isAllowed ? "btn" : "btn-hidden"}
                disabled={!isAllowed}
              >
                Absenden
              </button>
            </div>
            <div className="event-container">
              <h2>Mitglieder</h2>
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
