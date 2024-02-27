import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "../scss/Layout.module.scss";

export default function Layout() {
  return (
    <>
      <main className={styles.wrapper}>
        <Header />
        <div className={styles.layout} data-testid="layout">
          <Outlet />
        </div>
      </main>
    </>
  );
}
