import "../styles/access.css";

export default function Login({ handleClick }) {
  return (
    <main className="access">
      <section className="access-container">
        <div className="image-desktop"></div>
        <form>
          <input
            type="text"
            name="user_name"
            placeholder="Benutzername"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            required
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
