import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/account.css";

export default function Account() {
  let { id } = useParams();
  const [user, setUser] = useState([]);
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
          <div className="user-image">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Profilbild"
            />
          </div>
          <div className="user-info">
            <p>Benutzername: {thisUser.username}</p>
            <p>
              Name: {thisUser.firstname} {thisUser.lastname}
            </p>
            <p>Verein: {thisUser.team}</p>
          </div>
        </section>
      ) : (
        "not found"
      )}
    </main>
  );
}
