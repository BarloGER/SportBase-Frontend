import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/navigation.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="example-container">
        <NavLink className="nav-link" to="/aboutus">
          <li>Über uns</li>
        </NavLink>
      </ul>
      <ul className="social-container">
        <li>
          <a
            aria-label="Leitet zu Youtube weiter"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="fontawesomeicon"
              icon={["fab", "youtube"]}
            />
          </a>
        </li>
        <li>
          <a
            aria-label="Leitet zu Facebook weiter"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="fontawesomeicon"
              icon={["fab", "facebook"]}
            />
          </a>
        </li>
        <li>
          <a
            aria-label="Leitet zu Instagram weiter"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="fontawesomeicon"
              icon={["fab", "instagram"]}
            />
          </a>
        </li>
        <li>
          <a
            aria-label="Leitet zu Twitter weiter"
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="fontawesomeicon"
              icon={["fab", "twitter"]}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
