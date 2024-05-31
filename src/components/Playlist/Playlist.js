import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ name, tracks, onRemove, onNameChange, savePlaylist }) => {
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                style={{ fontSize: "24px", fontWeight: "bold" }}
            />
            <Tracklist tracks={tracks} onRemove={onRemove} />
            <button onClick={savePlaylist}>Save to Spotify</button>
        </div>
    );
};

export default Playlist;
