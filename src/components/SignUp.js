import { createUser } from "../utils/createUser";
import { useState } from "react";
import "../styles/access.css";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSubmission = {
    userName,
    email,
    password,
    terms,
  };
  console.log(formSubmission);

  //function for handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const error = await createUser(formSubmission);
      setErrorMessage(error.response.data);
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="access">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Benutzername"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
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
          <input
            type="password"
            name="password"
            placeholder="Passwort erneut eingeben"
            required
            onChange
          />
          <div className="terms">
            <label>
              Ich akzeptiere die Nutzungsbedingungen
              <input
                type="checkbox"
                name="confirm"
                onChange={(e) => setTerms(e.target.checked)}
              />
            </label>
          </div>
          <button className="button">Sign UP</button>
        </form>
        <legend>
          <p>{errorMessage}</p>
          <h1>SignUp</h1>
        </legend>
      </fieldset>
    </main>
  );
}
