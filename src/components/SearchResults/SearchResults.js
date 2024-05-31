import React from "react";
import Track from "../Track/Track";

const SearchResults = ({ tracks }) => {
    return (
        <div>
            {tracks.map((track) => (
                <Track key={track.id} track={track} />
            ))}
        </div>
    );
};

export default SearchResults;
