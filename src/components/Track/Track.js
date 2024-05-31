import React from "react";

const Track = ({ track }) => {
    if (!track) {
        return <div>Track information is missing</div>;
    }

    return (
        <div>
            <h3>{track.name}</h3>
            <p>
                {track.artist} | {track.album}
            </p>
        </div>
    );
};

export default Track;
