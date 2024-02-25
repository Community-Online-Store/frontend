import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "../scss/Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.layout} data-testid="layout">
      <Header />
      <Outlet />
    </div>
  );
}
