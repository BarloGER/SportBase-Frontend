import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/account.css";

export default function Account() {
  let { id } = useParams();
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(true);
  const thisUser = user.length && user.find((u) => u._id === id);

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main className="account">
      {" "}
      {thisUser ? (
        <section className="account-container">
          {edit ? (
            <div className="profile-container">
              <div className="left-container">
                <div className="user-image">
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
                    alt="Profilbild"
                  />
                  <p>{thisUser.username}</p>
                  <button className="btn">Nachricht</button>
                </div>
                <div className="user-aboutMe">
                  <h2>Über mich</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="right-container">
                <div className="user-info">
                  <p>Vorname {thisUser.firstname}</p>
                  <hr />
                  <p>Nachname {thisUser.lastname}</p>
                  <hr />
                  <p>Verein: {thisUser.team}</p>
                  <hr />
                  <p>Position: Wasserjunge</p>
                  <hr />
                  <button
                    className="btn"
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    Bearbeiten
                  </button>
                </div>
                <div className="user-comments"></div>
              </div>
            </div>
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
                  ></input>
                  <button className="btn">Nachricht</button>
                </div>
                <div className="user-aboutMe">
                  <h2>Über mich</h2>
                  <br />
                  <textarea
                    type="text"
                    name="aboutMe"
                    defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet."
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
                  <button className="btn"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Absenden
                  </button>
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
