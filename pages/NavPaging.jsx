import styles from "../src/PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../src/Logo";

export default function NavPaging() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
          </li>

        </ul>
      </nav>
    </>
  );
}
