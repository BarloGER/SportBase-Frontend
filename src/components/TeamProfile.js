import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { updateTeam } from "../utils/updateTeam";
import { updateUser } from "../utils/updateUser";
import axios from "axios";
import "../styles/account.css";
import Loadingspinner from "./LoadingSpinner";

export default function TeamProfile({ user }) {
  const { id } = useParams();

  const [currentTeam, setCurrentTeam] = useState({});
  const [isAllowed, setIsAllowed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getTeamById = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_FP_API}/team/${id}`
      );
      setCurrentTeam(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const checkIfAllowed = () => {
    if (
      !!user &&
      currentTeam.trainer === `${user.firstname} ${user.lastname}`
    ) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  // --------- put updatedTeam to BackEnd --------------//
  const updateCurrentTeam = async (updatedTeam) => {
    try {
      const { data } = await updateTeam(updatedTeam);
    } catch (error) {
      console.log(error);
    }
  };

  // --------- put updatedUser to BackEnd --------------//
  const updateCurrentUser = async (updatedUser) => {
    try {
      const { data, error } = await updateUser(updatedUser);
    } catch (error) {
      console.log(error.data);
    }
  };

  const handleJoinTeam = (e) => {
    e.preventDefault();

    if (currentTeam.member.some((m) => m._id === user._id)) {
      console.log("you are already part of this team");
    } else if (user.team && user.team !== "") {
      console.log("you are already part of an other team");
    } else {
      const updatedTeam = { ...currentTeam };
      updatedTeam.member.push(user);
      updatedTeam.memberCount = updatedTeam.member.length;

      const updatedUser = { ...user };
      updatedUser.team = currentTeam.team;

      updateCurrentTeam(updatedTeam);
      updateCurrentUser(updatedUser);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurrentTeam(currentTeam);
  };

  useEffect(() => {
    getTeamById();
  }, [id]);

  useEffect(() => {
    checkIfAllowed();
  }, [currentTeam]);

  return (
    <main className="account">
      {isLoading && <Loadingspinner />}
      <section className="account-container">
        <form className="profile-container" onSubmit={handleSubmit}>
          <div className="left-container">
            <div className="user-image">
              <img
                src={
                  currentTeam.logoUrl
                    ? currentTeam.logoUrl
                    : "https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                }
                alt={currentTeam.logoUrl ? currentTeam.team : "Vereinslogo"}
              />
              <button className="btn" onClick={handleJoinTeam}>
                Verein Beitreten
              </button>
            </div>
            <div className="user-aboutMe">
              <h2>Über uns</h2>
              <textarea
                type="text"
                name="aboutMe"
                defaultValue={currentTeam.team}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            </div>
          </div>
          <div className="right-container">
            <div className="team-info">
              <label>
                Vereinsname
                <input
                  type="text"
                  name="teamname"
                  defaultValue={currentTeam.team}
                  readOnly={!isAllowed ? "readOnly" : ""}
                  required
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </label>
              <label>
                Sportart
                <input
                  type="text"
                  name="sport"
                  defaultValue={currentTeam.sport}
                  readOnly={!isAllowed ? "readOnly" : ""}
                  required
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </label>
              <label>
                Trainer
                <input
                  type="text"
                  name="trainer"
                  defaultValue={currentTeam.trainer}
                  placeholder="Trainer"
                  readOnly={!isAllowed ? "readOnly" : ""}
                ></input>
              </label>
              <label className={isAllowed ? "" : "btn-hidden"}>
                Vereinslogo
                <input
                  className={isAllowed ? "" : "btn-hidden"}
                  type="text"
                  name="logoUrl"
                  defaultValue={currentTeam.logoUrl}
                  placeholder="Vereinslogo"
                  readOnly={!isAllowed ? "readOnly" : ""}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </label>
              <button
                className={isAllowed ? "btn" : "btn-hidden"}
                disabled={!isAllowed}
              >
                Absenden
              </button>
            </div>
            <div className="event-container">
              <h2>Mitglieder</h2>
              <span>
                <p>aktuell: {currentTeam.memberCount}</p>
              </span>
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
