import "../styles/eventInfo.css";

export default function EventInfo({ setNewEvent }) {

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="event-info">
      <fieldset>
        <form>
          <label>
            Event Name:
            <input
              type="text"
              name="title"
              placeholder="Event Name"
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
          </label>
          <label>
            Start
            <input
              type="datetime-local"
              name="startDate"
              placeholder="Datum"
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
          </label>
          <label>
            Ende
            <input
              type="datetime-local"
              name="endDate"
              placeholder="Datum"
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
          </label>
          <label>
            Wir spielen gegen:
            <input
              type="text"
              name="opponent"
              placeholder="Gegener"
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
          </label>
        </form>
      </fieldset>
    </main>
  );
}
