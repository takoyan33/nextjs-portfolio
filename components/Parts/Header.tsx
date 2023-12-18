import styles from "../index.module.scss";
import Link from "next/link";
import React, { useState } from "react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <a className={styles.logo} href="/">
            To You Design
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="Portfolio">ポートフォリオ</a>
            </li>
            <li>
              <a href="News">News</a>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}></p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="Portfolio">
              <p className={styles.mainTitle}>ポートフォリオ</p>
            </Link>
          </li>
          <li>
            <Link href="News">
              <p className={styles.mainTitle}>News</p>
              {/* <p className={styles.subTitle}>私のメニュー</p> */}
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
