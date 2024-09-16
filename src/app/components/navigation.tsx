import Image from "next/image";
import React from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      <div className={`inner ${styles.header}`}>
        {/* Logo */}
        <Link href={"/"} className={styles.logo}>
          <Image
            src="/images/starbucks_logo.png"
            alt="STARBUCKS_LOGO"
            width={75}
            height={75}
          />
        </Link>
        {/* Sub menu */}
        <div className={styles.subMenu}>
          <ul className={styles.menu}>
            <li>
              <Link href={"#"}>Sign in</Link>
            </li>
            <li>
              <Link href={"#"}>My Starbucks</Link>
            </li>
            <li>
              <Link href={"#"}>Customer Service & ideas</Link>
            </li>
            <li>
              <Link href={"#"}>Find a Store</Link>
            </li>
          </ul>
        </div>
        {/* Main menu */}

        <ul className={styles.mainMenu}>
          <li className={styles.item}>
            <div className={styles.item__name}>COFFEE</div>
            <div className={styles.item__contents}>
              <div className={styles.contents__menu}>
                <ul className="inner"></ul>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>MENU</div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>STORE</div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>RESPONSIBILITY</div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>MY STARBUCKS REWARDS</div>
          </li>
          <li className={styles.item}>
            <div className={styles.item__name}>{`WHAT'S NEW`}</div>
          </li>
        </ul>
      </div>
    </header>
  );
}
