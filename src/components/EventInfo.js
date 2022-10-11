import "../styles/eventInfo.css";

export default function EventInfo() {
  return (
    <main className="event-info">
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
            <input type="date" name="date" placeholder="Datum" required></input>
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
        </form>
      </fieldset>
    </main>
  );
}
