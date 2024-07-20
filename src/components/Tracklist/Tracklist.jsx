import React from "react";
import Track from "../Track/Track";

const Tracklist = ({tracks=[], btnContent, handleBtnOnClick}) => {
    return (
        <div className="track-list">
            {tracks.map((track,i) => (
                <Track
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    btnContent={btnContent}
                    handleBtnOnClick={() =>handleBtnOnClick(track.id)}
                />
            ))}
        </div>
    )
}

export default Tracklist;