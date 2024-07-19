import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

const Playlist = (props) => {
  return (
    <div className={styles.playList}>
      <input type="text" placeholder="Playlist Name" className={styles.playlistInput} />
      <Tracklist />
      <div style={{display:"flex",justifyContent:'center'}}>
        <button className={styles.spotifyButton}>SAVE TO SPOTIFY</button>
      </div>
    </div>
  );
};

export default Playlist;
