import "../styles/events.css";

export default function Events() {
  return (
    <main className="events">
      <div className="fields">
        {/* <img
          src="https://thumbs.dreamstime.com/b/fu%C3%9Fballplatz-skizze-92868869.jpg"
          alt="Fußballfeld"
        /> */}
      </div>
      <div className="all-players">
        <div className="active-players">
          <h2>Alle verfügbaren Spieler</h2>
          <div className="player">
            <img
              draggable="true"
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              draggable="true"
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
        </div>
        <div className="reserve">
          <h2>Reserve</h2>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
          <div className="player">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="Spielerbild"
            />
            <span className="name">Max Mustermann</span>
          </div>
        </div>
      </div>
      <div className="info">
        <fieldset>
          <form>
            <label>
              Event Name:
              <input
                type="text"
                name="event-name"
                placeholder="Event Name"
                required
              ></input>
            </label>
            <label>
              Datum
              <input
                type="date"
                name="date"
                placeholder="Datum"
                required
              ></input>
            </label>
            <label>
              Wir spielen gegen
              <input
                type="text"
                name="enemy"
                placeholder="Gegen"
                required
              ></input>
            </label>
            <div className="terms">
              <label>
                Ich bin sicher dass alle Angaben korrekt sind.
                <input type="checkbox" name="confirm" onChange />
              </label>
            </div>
            <button className="button">Event erstellen</button>
          </form>
          <legend>
            <h1>Infos</h1>
          </legend>
        </fieldset>
      </div>
    </main>
  );
}
