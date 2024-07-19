import React from "react";
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.appName}>Ja<span className={styles.appNameHighlight}>mmm</span>ing</h1>
        </header>
    )
}

export default Header;