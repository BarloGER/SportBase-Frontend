import "../styles/access.css";

export default function Login() {
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
            type="password"
            name="password"
            placeholder="Passwort"
            required
            onChange
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
