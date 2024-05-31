import React from "react";

const Track = ({ track, onAdd }) => {
    if (!track) {
        return <div>Track information is missing</div>;
    }

    return (
        <div>
            <h3>{track.name}</h3>
            <p>
                {track.artist} | {track.album}
            </p>
            <button onClick={() => onAdd(track)}>+</button>
        </div>
    );
};

export default Track;
