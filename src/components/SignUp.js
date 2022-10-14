import { createUser } from "../utils/createUser";
import { useState } from "react";
import "../styles/access.css";

export default function SignUp({ handleClick }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // When the input changes, set the input to the value of the input and validate the input.
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  // Validating the input.
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstname":
          if (!value) {
            stateObj[name] = "Bitte Vornamen angeben.";
          }
          break;

        case "lastname":
          if (!value) {
            stateObj[name] = "Bitte Nachnamen angeben.";
          }
          break;

        case "username":
          if (!value) {
            stateObj[name] = "Bitte Benutzernamen angeben.";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Bitte Email angeben.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Bitte Passwort angeben.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Die Passwörter stimmen nicht überein.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Bitte Passwort Bestätigung angeben.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Die Passwörter stimmen nicht überein.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const formSubmission = {
    firstname,
    lastname,
    username,
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
      <section className="access-container">
        <div className="image-desktop"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="Vorname"
            required
            value={input.firstname}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setFirstname(e.target.value)}
          />
          {error.firstname && <span className="err">{error.firstname}</span>}
          <input
            type="text"
            name="lastname"
            placeholder="Nachname"
            required
            value={input.lastname}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setLastname(e.target.value)}
          />
          {error.lastname && <span className="err">{error.lastname}</span>}
          <input
            type="text"
            name="username"
            placeholder="Benutzername"
            required
            value={input.username}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setUsername(e.target.value)}
          />
          {error.username && <span className="err">{error.username}</span>}
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={(e) => setEmail(e.target.value)}
          />
          {error.email && <span className="err">{error.email}</span>}
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            required
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            onInput={() => (e) => setPassword(e.target.value)}
          />
          {error.password && <span className="err">{error.password}</span>}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Passwort erneut eingeben"
            required
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
          />
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}
          <div className="terms">
            <label className="label">
              Ich akzeptiere die Nutzungsbedingungen
              <input
                type="checkbox"
                name="confirm"
                required
                onInput={(e) => setTerms(e.target.checked)}
              />
            </label>
          </div>
          <button className="button">Sign UP</button>
          <br />
          <div>
            <p>Bereits registriert?</p>
            <button className="button" onClick={() => handleClick(true)}>
              SignIn
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
