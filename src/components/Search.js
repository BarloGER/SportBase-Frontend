import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/search.css";

// export default function Search() {
//   const [user, setUser] = useState("");
//   const getUser = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
//       console.log(data);
//       setUser(data);
//       console.log(setUser() + "hi");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);
//   return;
// }

export default function Search() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [user, setUser] = useState("");

  const getUser = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_FP_API}/user`);
      console.log(data);
      setUser(data);
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
    const newFilter = user.filter((u) => {
      return u.username.toLowerCase().includes(searchWord.toLowerCase());
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
    <main className="search-container">
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
              // <FontAwesomeIcon className="fontawesomeicon" icon="trash-alt" />
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
                <a className="dataItem" href={value.link} target="_blank">
                  <p>
                    {value.username} {value.firstname} {value.lastname}
                  </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
