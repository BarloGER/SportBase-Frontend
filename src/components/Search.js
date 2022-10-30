import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "../styles/search.css";

export default function Search() {
  const [formatedUsers, setFormatedUsers] = useState([]);
  const [formatedTeams, setFormatedTeams] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [active, setActive] = useState(false);



  const getData = async () => {
    try {
      const userData = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      const teamData = await axios.get(`${process.env.REACT_APP_FP_API}/team`);

      setFormatedUsers(userData.data.map(user => (
        {
          title: [user.firstname, user.lastname, user.username],
          dataType: 'user',
          link: `/account/${user._id}`,
          id: user._id
        }
      )));

      setFormatedTeams(teamData.data.map(team => (
        {
          title: [team.team],
          dataType: 'team',
          link: `/teamprofile/${team._id}`,
          id: team._id
        }
      )));

    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    const searchQuery = event.target.value;

    setWordEntered(searchQuery);
    setActive(true);

    const matchedTeams = formatedTeams.filter(({ title }) => title.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchedUsers = formatedUsers.filter(({ title }) => title.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

    let newFilter = [];
    newFilter = newFilter.concat(matchedTeams);
    newFilter = newFilter.concat(matchedUsers);

    if (searchQuery === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const checkType = (value) => {

    if (value.dataType === 'user') {
      return (
        <Link
          to={value.link}
          onClick={clearInput}
          key={value.id}
        >
          <div className="data-item-container">
            < p className="title">
              {/* title=[ firstname, lastname, username] */}
              {value.title[0]} {value[1]} {value.title[2]}
            </p>
            <p className="type">
              {value.dataType}
            </p>
          </div>
        </Link>)
    } else if (value.dataType === 'team') {
      return (
        <Link
          to={value.link}
          onClick={clearInput}
          key={value.id}
        >
          <div className="data-item-container">
            <p className="title">
              {/* title=[ title] */}
              {value.title[0]}
            </p>
            <p className="type">
              {value.dataType}
            </p>
          </div>
        </Link>)
    }
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  useEffect(() => {
    if (active) {
      getData();
    }
  }, [active]);

  return (
    <section className="search-container">
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Suchen"
            value={wordEntered}
            onChange={handleSearch}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <FontAwesomeIcon
                className="fontawesomeicon"
                icon="fa-magnifying-glass"
              />
            ) : (
              <FontAwesomeIcon
                className="fontawesomeicon"
                icon="fa-xmark"
                onClick={clearInput}
              />
            )}
          </div>
        </div>
        {(filteredData.length > 0) && (
          <div className="dataResult">
            {filteredData.slice(0, 10).map((value) => {
              return checkType(value);
            })}
          </div>
        )}
      </div>
    </section>
  );
}
