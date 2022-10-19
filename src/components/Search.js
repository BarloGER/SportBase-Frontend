import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "../styles/search.css";

export default function Search() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [users, setUsers] = useState("");

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = users.filter((u) => {
      return (
        u.username.toLowerCase().includes(searchWord.toLowerCase()) ||
        u.firstname.toLowerCase().includes(searchWord.toLowerCase()) ||
        u.lastname.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <section className="search-container">
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Suchen"
            value={wordEntered}
            onChange={handleFilter}
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
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link to={`/account/${value._id}`}>
                  <p>
                    {value.username} {value.firstname} {value.lastname}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
