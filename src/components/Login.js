import "../styles/access.css";
import { useState } from "react";
import { login } from "../utils/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmission = {
    email,
    password,
  };

  //function for handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const error = await login(formSubmission);
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  };
  console.log(formSubmission);
  return (
    <main className="access">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="terms">
            <label>
              Ich möchte angemeldet bleiben.
              <input type="checkbox" name="confirm" onChange />
            </label>
          </div>
          <button className="button">Login</button>
        </form>
        <legend>
          <h1>Login</h1>
        </legend>
      </fieldset>
    </main>
  );
}
