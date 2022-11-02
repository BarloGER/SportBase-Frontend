import Autocomplete from "react-google-autocomplete";

export default function EventInfoForm({ setNewEvent }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const key = process.env.REACT_APP_PLACES;

  return (
    <section className="event-info">
      <form>
        <label>
          Event Name
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
          Ort
          <Autocomplete
            apiKey={key}
            onPlaceSelected={(place) => {
              // console.log(place.address_components[0].long_name);
            }}
            name="location"
            onBlur={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Wir spielen gegen
          <input
            type="text"
            name="opponent"
            placeholder="Gegener"
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
        </label>
      </form>
    </section>
  );
}
