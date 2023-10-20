import styles from "../src/AppNav.module.css";
import { NavLink } from "react-router-dom";
export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities" className={styles.cities}>
            cities
          </NavLink>
        </li>
        <li>
          <NavLink to="countries" className={styles.countries}>
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
