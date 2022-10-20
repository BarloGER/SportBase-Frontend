import "../styles/access.css";
import { useState } from "react";
import { login } from "../utils/login";
import { Navigate } from "react-router-dom";

export default function Login({
  handleClick,
  isAuthenticated,
  setIsAuthenticated,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  // const [token, setToken] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) return alert("Please fill out all the fields");
      const { data, error } = await login({ email, password });
      if (error) {
        return error;
      }
      localStorage.setItem("token", data.token);
      // setToken(data);
      setIsAuthenticated(true);
    } catch (error) {}
  };

  const checkCapsLock = (event) => {
    console.log(event);
    if (event.getModifierState("CapsLock")) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  // WENN EINGELOGT, DANN WIRD MAN DIREKT AUFS DASHBOARD GELEITET ANSONSTEN BLEIBT MAN IN DER LOGIN KOMPONENTE
  return isAuthenticated ? (
    // from <Navigate to={"../secret/dashboard"} /> to
    <Navigate to={"/secret/dashboard"} />
  ) : (
    <section className="access">
      <div className="access-container">
        <div className="image-desktop"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            onInput={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            onKeyUp={checkCapsLock}
            // required
            onInput={(e) => setPassword(e.target.value)}
          />
          {isCapsLockOn && (
            <p className="caps-lock-warning">Feststelltaste ist aktiviert!</p>
          )}
          <div className="terms">
            <label className="label">
              Ich möchte angemeldet bleiben.
              <input type="checkbox" name="confirm" />
            </label>
          </div>

          <button className="button">Sign In</button>
          <br />
          <div>
            <p>Noch nicht registriert?</p>
            <button className="button" onClick={(e) => handleClick(false, e)}>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
