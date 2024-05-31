import React from "react";
import Track from "../Track/Track";

const Tracklist = ({ tracks }) => {

    if (!tracks) {
        return <div>Tracks information is missing</div>;
    }
    return (
        <div>
            {tracks.map(track => <Track key={track.id} track={track} />)}
        </div>
    );
};

export default Tracklist;
