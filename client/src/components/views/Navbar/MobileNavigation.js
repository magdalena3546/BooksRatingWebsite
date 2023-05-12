import { useState } from "react";
import styles from "./Navbar.module.scss";
import NavLinks from "./NavLinks";
import { BiBookOpen } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const humburgerIcon = (
    <BiBookOpen className={styles.hamburger} onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <RiCloseFill className={styles.hamburger} onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={styles.mobileNavigation}>
      {open ? closeIcon : humburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
