import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

const Playlist = ({ tracks, title, handleTitleOnChange, handleRemoveTrack}) => {
  

  return (
    <div className={styles.playList}>
      <input
        type="text"
        value={title}
        placeholder="Playlist Name"
        className={styles.playlistInput}
        onChange={(e) =>handleTitleOnChange(e.target.value)}
      />
      <Tracklist tracks={tracks} btnContent='-' handleBtnOnClick={(i) =>handleRemoveTrack(i)}/>
      <div style={{display:"flex",justifyContent:'center'}}>
        <button className={styles.spotifyButton}>SAVE TO SPOTIFY</button>
      </div>
    </div>
  );
};

export default Playlist;
