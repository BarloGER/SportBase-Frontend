import "../styles/access.css";
import { useState } from "react";
import { login } from "../utils/login";

export default function Login({ handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) return alert("Please fill out all the fields");
      const { data, error } = await login({ email, password });
      if (error) {
        return error;
      }
      localStorage.setItem("token", data);
      setToken(data);
      console.log(token);
      setIsAuthenticated(true);
      console.log(isAuthenticated);
    } catch (error) {}
  };

  return (
    <main className="access">
      <section className="access-container">
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
            required
            onInput={(e) => setPassword(e.target.value)}
          />
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
            <button className="button" onClick={() => handleClick(false)}>
              SignUp
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
