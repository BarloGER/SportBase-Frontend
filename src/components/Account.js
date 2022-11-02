import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { updateUser } from "../utils/updateUser";
import axios from "axios";
import moment from "moment";
import "../styles/account.css";
import Loadingspinner from "./LoadingSpinner";

export default function Account({ user }) {
  const { id } = useParams();

  const [loggedInUser, setLoggedInUser] = useState(user);
  const [currentUser, setCurrentUser] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUserById = async () => {
    try {
      // const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user/${id}`)
      // setCurrentUser(data);
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setCurrentUser(data.find((user) => user._id === id));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
    checkID();
  };

  const getEvents = async (id) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/event`);
      setEvents(
        data.filter(
          (event) =>
            event.activePlayers.some((ap) => ap._id === id) ||
            event.reservePlayers.some((rp) => rp._id === id)
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const checkID = () => {
    if (!user) {
      setIsAllowed(false);
    } else if (id !== user._id) {
      setIsAllowed(false);
    } else {
      setIsAllowed(true);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurrentUser(currentUser);
  };

  useEffect(() => {
    if (!id) {
      setCurrentUser(loggedInUser);
    }
    getUserById();
    getEvents(id);
  }, [id]);

  useEffect(() => {}, [events]);

  return (
    <main className="account">
      {isLoading && <Loadingspinner />}
      <form className="profile-container" onSubmit={handleSubmit}>
        <div className="left-container">
          <div className="user-image">
            <img
              src={
                currentUser.userImage
                  ? currentUser.userImage
                  : "https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              }
              alt="Profilbild"
            />
            <input
              type="text"
              name="username"
              defaultValue={currentUser.username}
              // readOnly={!isAllowed ? "readOnly" : ""}
              readOnly
              required
            ></input>
            <button className="btn">Nachricht</button>
          </div>
          <div className="user-aboutMe">
            <h2>Über mich</h2>
            <textarea
              type="text"
              name="aboutMe"
              defaultValue={currentUser.aboutMe}
              readOnly={!isAllowed ? "readOnly" : ""}
              placeholder="Über mich"
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </div>
        </div>
        <div className="right-container">
          <div className="user-info">
            <div className="inputs-left">
              <label>
                Vorname
                <input
                  type="text"
                  name="firstname"
                  defaultValue={currentUser.firstname}
                  // readOnly={!isAllowed ? "readOnly" : ""}
                  readOnly
                  required
                ></input>
              </label>
              <label>
                Nachnahme
                <input
                  type="text"
                  name="lastname"
                  defaultValue={currentUser.lastname}
                  // readOnly={!isAllowed ? "readOnly" : ""}
                  readOnly
                  required
                ></input>
              </label>
              <label>
                Verein
                <input
                  type="text"
                  name="team"
                  defaultValue={currentUser.team}
                  // readOnly={!isAllowed ? "readOnly" : ""}
                  readOnly
                  placeholder="Verein"
                ></input>
              </label>
              <label>
                Position
                <input
                  type="text"
                  name="position"
                  defaultValue={currentUser.position}
                  placeholder="Position"
                  readOnly={!isAllowed ? "readOnly" : ""}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </label>
            </div>
            <div className="inputs-right">
              <label>
                Alter
                <input
                  type="number"
                  name="age"
                  defaultValue={currentUser.age}
                  placeholder="Alter"
                  readOnly={!isAllowed ? "readOnly" : ""}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </label>
              <label>
                Größe
                <input
                  type="number"
                  name="height"
                  defaultValue={currentUser.height}
                  placeholder="Größe in cm"
                  readOnly={!isAllowed ? "readOnly" : ""}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </label>
              <label>
                Gewicht
                <input
                  type="number"
                  name="weight"
                  defaultValue={currentUser.weight}
                  placeholder="Gewicht in kg"
                  readOnly={!isAllowed ? "readOnly" : ""}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </label>
              <label className={isAllowed ? "" : "btn-hidden"}>
                Profilbild
                <input
                  className={isAllowed ? "" : "btn-hidden"}
                  type="text"
                  name="userImage"
                  defaultValue={currentUser.userImage}
                  placeholder="Url des Profilbild"
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
          </div>
          <div className="event-container">
            <h2>Event teilnahme</h2>
            <span>Wann</span>
            <span>Wo</span>
            <span>Gegen wenn?</span>
            {events && events.length ? (
              events.map((e) => (
                <Link to={`/event/${e._id}`} key={e._id}>
                  <p className="event-name">
                    {moment(e.startDate).format("DD-MM-YYYY")} {e.opponent}
                  </p>
                </Link>
              ))
            ) : (
              <span>
                <p>Bisher keine Event teilnahme</p>
              </span>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}
