import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import styles from "../scss/Header.module.scss";

const links = [
  {
    path: "man",
    title: "Man",
  },
  {
    path: "woman",
    title: "Woman",
  },
  {
    path: "new",
    title: "New",
  },
  {
    path: "sale",
    title: "Sale",
  },
];

export default function Header() {
  return (
    <div>
      <nav className={styles.header}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <div className={styles.logo} />
            <span className={styles.logoText}>StaffFusion</span>
          </div>
        </Link>
        <ul className={styles.linkList}>
          {links.map((link) => (
            <li key={link.path} className={styles.linkItem}>
              <NavLink to={link.path} className={styles.headerLink}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.headerIcons}>
          <Link to={"search"} className={styles.headerIconLink}>
            <IoIosSearch className={styles.headerIcon} />
          </Link>
          <Link to={"cart"} className={styles.headerIconLink}>
            <PiShoppingBagOpenLight className={styles.headerIcon} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
