import React from "react";
import Track from "../Track/Track";

const SearchResults = ({ tracks, onAdd }) => {
    return (
        <div>
            {tracks.map((track) => (
                <Track key={track.id} track={track} onAdd={onAdd} />
            ))}
        </div>
    );
};

export default SearchResults;
