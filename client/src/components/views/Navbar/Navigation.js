import NavLinks from "./NavLinks";
import styles from "./Navbar.module.scss";
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
