function SubmitLineupForm({ setNewEvent }) {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className='event-info upload'>
      <h3>Anleitung</h3>
      <div>
        <ul>
          <li><a href="https://de.share-your-photo.com/" target='_blank'>Lade hier deine Aufstellung hoch</a></li>
          <li>Kopiere den dort generierten Link in unten stehendes Feld</li>
          <li>Drücke auf Bestaätigen</li>
        </ul>
      </div>
      <form>
        <label>
          Aufstellung
          <input
            type="text"
            name="lineUp"
            placeholder="Event Name"
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
        </label>
      </form>
    </section>
  )
};

export default SubmitLineupForm;
