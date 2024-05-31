import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ name, tracks }) => {
    return (
        <div>
            <h2>{name}</h2>
            <Tracklist tracks={tracks} />
        </div>
    );
};

export default Playlist;
