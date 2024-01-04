import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styles from "./App.module.css";
import Footer from "./Footer";
import "./App.font.css"
import { useState } from "react";

function App() {
  return (
    <>
      <Nav className={styles.nav}/>
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer}/>
    </>
  );
}

export default App;
