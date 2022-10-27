import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/account.css";
import Loadingspinner from "./LoadingSpinner";

export default function Account({ user }) {
  const { id } = useParams();
  console.log(user);
  const [searchUser, setSearchUser] = useState([]);
  const thisUser = searchUser.length && searchUser.find((u) => u._id === id);
  const [isAllowed, setIsAllowed] = useState(true);

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setSearchUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
    checkID();
  }, [isAllowed]);

  const checkForData = () => {
    return !searchUser || searchUser.length === 0 ? false : true;
  };

  console.log(user._id);
  console.log(id);
  const checkID = () => {
    if (!user.user) {
      setIsAllowed(false);
    } else if (id !== user._id) {
      setIsAllowed(false);
    } else {
      setIsAllowed(true);
    }
  };

  return (
    <main className="account">
      {" "}
      {!checkForData() && <Loadingspinner />}
      <section className="account-container">
        <form className="profile-container">
          <div className="left-container">
            <div className="user-image">
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                alt="Profilbild"
              />
              <input
                type="text"
                name="username"
                defaultValue={thisUser.username}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <button className="btn">Nachricht</button>
            </div>
            <div className="user-aboutMe">
              <h2>Über mich</h2>
              <br />
              <textarea
                type="text"
                name="aboutMe"
                defaultValue={thisUser.aboutMe}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
              ></textarea>
            </div>
          </div>
          <div className="right-container">
            <div className="user-info">
              <input
                type="text"
                name="firstname"
                defaultValue={thisUser.firstname}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <hr />
              <input
                type="text"
                name="lastname"
                defaultValue={thisUser.lastname}
                readOnly={!isAllowed ? "readOnly" : ""}
                required
              ></input>
              <hr />
              <input
                type="text"
                name="team"
                defaultValue={thisUser.team}
                readOnly={!isAllowed ? "readOnly" : ""}
                placeholder="Verein"
              ></input>
              <hr />
              <input
                type="text"
                name="Position"
                defaultValue="Wasserjunge"
                placeholder="Position"
                disabled={!isAllowed}
              ></input>
              <hr />
              <button
                className={isAllowed ? "btn" : "btn-hidden"}
                disabled={!isAllowed}
              >
                Absenden
              </button>
            </div>
            <div className="user-comments">hi</div>
          </div>
        </form>
      </section>
    </main>
  );
}
