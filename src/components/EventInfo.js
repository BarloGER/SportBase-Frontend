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
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <label>
            Event Name:
            <input
              type="text"
              name="eventName"
              placeholder="Event Name"
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
          </label>
          <label>
            Datum
            <input
              type="date"
              name="date"
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
