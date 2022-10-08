import "../styles/access.css";

export default function SignUp() {
  return (
    <main className="access">
      <fieldset>
        <form onSubmit>
          <input
            type="text"
            name="user_name"
            placeholder="Benutzername"
            required
            onChange
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            onChange
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            required
            onChange
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
              <input type="checkbox" name="confirm" onChange />
            </label>
          </div>
          <button className="button">Sign UP</button>
        </form>
        <legend>
          <h1>SignUp</h1>
        </legend>
      </fieldset>
    </main>
  );
}
