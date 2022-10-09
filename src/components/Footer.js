import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <ul className="exanple-container">
        <NavLink className="nav-link" to="/">
          <li>Beispiel</li>
        </NavLink>
        <NavLink className="nav-link" to="/">
          <li>Beispiel</li>
        </NavLink>
        <NavLink className="nav-link" to="/">
          <li>Beispiel</li>
        </NavLink>
        <NavLink className="nav-link" to="/">
          <li>Beispiel</li>
        </NavLink>
      </ul>
      <ul className="social-container">
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon className="fontawesomeicon" icon={['fab', 'youtube']} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon className="fontawesomeicon" icon={['fab', 'facebook']} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon className="fontawesomeicon" icon={['fab', 'instagram']} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank">
            <FontAwesomeIcon className="fontawesomeicon" icon={['fab', 'twitter']} />
          </a>
        </li>
      </ul>
    </section>
  );
}
