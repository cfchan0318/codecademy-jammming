import React from "react";
import Track from "../Track/Track";

const Tracklist = ({tracks=[]}) => {
    return (
        <div className="track-list">
            {tracks.map((track,i) => (
                <Track key={i} name={track.name} artist={track.artist} album={track.album}/>
            ))}
        </div>
    )
}

export default Tracklist;