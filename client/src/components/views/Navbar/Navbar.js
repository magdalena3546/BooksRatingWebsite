import styles from "./Navbar.module.scss";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { useState } from "react";
import clsx from "clsx";

const Navbar = (props) => {
  const [fix, setFix] = useState(false);
  const setPosition = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setPosition);
  return (
    <div className={clsx(styles.nav, fix ? styles.fixed : styles.normal)}>
      <div className={styles.logo}>
        <p>BookFreak</p>
      </div>
      <div className={styles.menu}>
        <MobileNavigation />
        <Navigation />
      </div>
    </div>
  );
};

export default Navbar;
