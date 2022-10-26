import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/account.css";

export default function UserProfiles({ user }) {
  const { id } = useParams();
  const [searchUser, setSearchUser] = useState([]);
  const thisUser = searchUser.length && searchUser.find((u) => u._id === id);

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
  }, []);

  const checkIdMatch = () => {
    if (!user) {
      return false;
    } else if (id !== user._id) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <main className="account">
      {" "}
      {thisUser ? (
        <section className="account-container">
          {checkIdMatch() ? (
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
                    required
                  ></input>
                  <hr />
                  <input
                    type="text"
                    name="lastname"
                    defaultValue={thisUser.lastname}
                    required
                  ></input>
                  <hr />
                  <input
                    type="text"
                    name="team"
                    defaultValue={thisUser.team}
                    placeholder="Verein"
                  ></input>
                  <hr />
                  <input
                    type="text"
                    name="Position"
                    defaultValue="Wasserjunge"
                    placeholder="Position"
                  ></input>
                  <hr />
                  <button className="btn">Absenden</button>
                </div>
                <div className="user-comments">hi</div>
              </div>
            </form>
          ) : (
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
                    required
                    disabled
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
                    placeholder="Verein"
                    disabled
                  ></textarea>
                </div>
              </div>
              <div className="right-container">
                <div className="user-info">
                  <input
                    type="text"
                    name="firstname"
                    defaultValue={thisUser.firstname}
                    required
                    disabled
                  ></input>
                  <hr />
                  <input
                    type="text"
                    name="lastname"
                    defaultValue={thisUser.lastname}
                    required
                    disabled
                  ></input>
                  <hr />
                  <input
                    type="text"
                    name="team"
                    defaultValue={thisUser.team}
                    placeholder="Verein"
                    disabled
                  ></input>
                  <hr />
                  <input
                    type="text"
                    name="Position"
                    defaultValue="Wasserjunge"
                    placeholder="Position"
                    disabled
                  ></input>
                  <hr />
                </div>
                <div className="user-comments">hi</div>
              </div>
            </form>
          )}
        </section>
      ) : (
        "not found"
      )}
    </main>
  );
}
