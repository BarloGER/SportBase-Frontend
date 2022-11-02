import { useState } from "react";
import { login } from "../utils/login";
import { Navigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({
  handleClick,
  isAuthenticated,
  setToken,
  setIsAuthenticated,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  // const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) return alert("Please fill out all the fields");
      const { data, error } = await login({ email, password });
      if (error) {
        return error;
      }
      // setErrorMessage(error.response.data);
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setIsAuthenticated(true);
    } catch (error) {}
  };

  const checkCapsLock = (event) => {
    if (event.getModifierState("CapsLock")) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  // const notify = () => toast(errorMessage);

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
            required
            onInput={(e) => setPassword(e.target.value)}
          />
          {isCapsLockOn && (
            <p className="caps-lock-warning">Feststelltaste ist aktiviert!</p>
          )}
          {/* <div className="terms">
            <label className="label">
              Ich möchte angemeldet bleiben.
              <input type="checkbox" name="confirm" />
            </label>
          </div> */}

          <button className="signIn-buttons btn">Sign In</button>
          <br />
          <div className="switch">
            <p>Noch nicht registriert?</p>
            <button
              className="signIn-buttons btn"
              onClick={(e) => handleClick(false, e)}
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
