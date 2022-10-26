import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from "moment";
import axios from 'axios';
import '../../styles/eventDetail.css';

function EventDetail() {

  const [currentEvent, setCurrentEvent] = useState({});

  const { id } = useParams();

  const getEventById = async () => {
    try {
      // const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/event/${id}`);
      // setCurrentEvent(data);

      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/event`);
      const temp = data.find(event => event._id === id);
      setCurrentEvent(temp);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getEventById();
  }, []);

  return (
    <main className='event-detail-section'>
      <div className="lineup-field">
        <img
          src={currentEvent.lineUp ? currentEvent.lineUp : 'https://thumbs.dreamstime.com/b/fu%C3%9Fballplatz-skizze-92868869.jpg'}
          alt="line-up"
        />
      </div>
      <div className="player-container">
        <div className="player">
          <h2>Aktiver Spieler</h2>
          {currentEvent.activePlayers ? currentEvent.activePlayers.map(player => <div className="playerinfo" key={player._id}>
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="pictureOfPlayer"
            />
            <span className="name">
              {player.firstname} {player.lastname}
            </span>
          </div>) : (
            <h2>Keine aktiven Spieler</h2>
          )}
        </div>
        <div className="player">
          <h2>Reserve Spieler</h2>
          {currentEvent.reservePlayers ? currentEvent.reservePlayers.map(player => <div className="playerinfo" key={player._id}>
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/99/36/67/1000_F_299366779_2qGB5Gs7is4vhvAtI6DHTrSh9pPo6kJz.jpg"
              alt="pictureOfPlayer"
            />
            <span className="name">
              {player.firstname} {player.lastname}
            </span>
          </div>) : (
            <h2>Keine aktiven Spieler</h2>
          )}
        </div>
      </div>
      <div className='event-detail-info-container'>
        <h2>Event Info's</h2>
        <form>
          <label>
            Event Name
            <input
              type="text"
              name="title"
              defaultValue={currentEvent.title}
              readOnly
              required
            ></input>
          </label>
          <label>
            Start
            <input
              type="datetime-local"
              name="startDate"
              defaultValue={moment(currentEvent.startDate).format('YYYY-MM-DDTHH:mm')}
              readOnly
              required
            ></input>
          </label>
          <label>
            Ende
            <input
              type="datetime-local"
              name="endDate"
              value={moment(currentEvent.endDate).format('YYYY-MM-DDTHH:mm')}
              readOnly
              required
            ></input>
          </label>
          <label>
            Wir spielen gegen
            <input
              type="text"
              name="opponent"
              value={currentEvent.opponent}
              required
            ></input>
          </label>
        </form>
      </div>
    </main>
  )
};

export default EventDetail;
