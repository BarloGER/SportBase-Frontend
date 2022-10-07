import { NavLink } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <ul>
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
    </section>
  );
}
