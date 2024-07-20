import React, { useState } from "react";
import styles from './Track.module.css'

const Track = ({name, artist, album, btnContent, handleBtnOnClick}) => {
    return (
        <div className={styles.track}>
            <div style={{flex:3}}>
                <div className={styles.trackTitle}><b>{name}</b></div>
                <div className={styles.trackArtist}>{artist} | {album}</div>
            </div>
            <div style={{flex:1, display:'flex',alignItems:'center',justifyContent:'center'}}>
                <button onClick={handleBtnOnClick} className={styles.trackButton}>{btnContent}</button>
            </div>
        </div>
    )
}

export default Track;