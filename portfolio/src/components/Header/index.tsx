import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const handleDarkModeToggle = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header
      className={`${styles.header} ${
        document.body.classList.contains("dark-mode") ? styles.darkMode : ""
      }`}
    >
      <nav className={styles.header__menu}>
        <Link className={styles.header__menu__link} to="./">
          Home
        </Link>
        <Link className={styles.header__menu__link} to="./about-me">
          About Me
        </Link>
      </nav>
      <div className={styles.light_dark_mode}>
        <input
          type="checkbox"
          id="switch-button"
          className={styles.checkbox}
          onClick={handleDarkModeToggle}
        />
        <label className={styles.change_theme} htmlFor="switch-button">
          <i className={`fa-solid fa-sun ${styles.faSun}`}></i>
          <i className={`fa-solid fa-moon ${styles.faMoon}`}></i>
        </label>
      </div>
    </header>
  );
}
