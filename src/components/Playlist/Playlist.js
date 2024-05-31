import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ name, tracks, onRemove }) => {
    return (
        <div>
            <h2>{name}</h2>
            <Tracklist tracks={tracks} onRemove={onRemove} />
        </div>
    );
};

export default Playlist;
