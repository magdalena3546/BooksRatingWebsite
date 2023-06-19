import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    if (props.isMobile) {
      props.closeMobileMenu();
    }
  };
  return (
    <ul className={styles.list}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={logout}>
        <Link className={styles.link}>logout</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/mybooks" className={styles.link}>
          mybooks
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
