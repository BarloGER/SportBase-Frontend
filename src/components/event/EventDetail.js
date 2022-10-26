import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from "moment";
import axios from 'axios';
import '../../styles/eventDetail.css';

function EventDetail() {

  const [currentEvent, setCurrentEvent] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);

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

  //-------------TODO: trigger update stuff here
  const handleUpdateEvent = (e) => {
    e.preventDefault();
    console.log('update this event if you can!')
  };

  //------------- TODO:collecting chenged event data here
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
  };

  useEffect(() => {
    getEventById();
  }, [isAllowed]);

  return (
    <main className='event-detail-section'>
      <div className="event-detail-card">
        <div className="title-container">
          <h1>Aufstellung</h1>
        </div>
        <div className="content-container">
          <img
            src={currentEvent.lineUp ? currentEvent.lineUp : 'https://thumbs.dreamstime.com/b/fu%C3%9Fballplatz-skizze-92868869.jpg'}
            alt="line-up"
          />
        </div>
      </div>
      <div className="event-detail-card">
        <div className="title-container">
          <h1>Spieler</h1>
        </div>
        <div className="player-content">
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
        <div className="title-container">
          <h1>Reserve</h1>
        </div>
        <div className="player-content">
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
      <div className="event-detail-card">
        <div className="title-container">
          <h1>Event Info's</h1>
        </div>
        <div className="content-container event-info">
          <form onSubmit={handleUpdateEvent}>
            <label>
              Event Name
              <input
                type="text"
                name="title"
                defaultValue={currentEvent.title}
                readOnly={!isAllowed ? 'readOnly' : ''}
                required
              ></input>
            </label>
            <label>
              Start
              <input
                type="datetime-local"
                name="startDate"
                value={moment(currentEvent.startDate).format('YYYY-MM-DDTHH:mm')}
                readOnly={!isAllowed ? 'readOnly' : ''}
                required
              ></input>
            </label>
            <label>
              Ende
              <input
                type="datetime-local"
                name="endDate"
                value={moment(currentEvent.endDate).format('YYYY-MM-DDTHH:mm')}
                readOnly={!isAllowed ? 'readOnly' : ''}
                required
              ></input>
            </label>
            <label>
              Wir spielen gegen
              <input
                type="text"
                name="opponent"
                value={currentEvent.opponent}
                readOnly={!isAllowed ? 'readOnly' : ''}
                required
              ></input>
            </label>
            <button
              className={isAllowed ? 'btn' : 'btn-hidden'}
              // className='btn'
              disabled={!isAllowed}>
              Event bearbeiten</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EventDetail;
