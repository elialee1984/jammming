import React, { useState } from "react";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Track from "./components/Track/Track";
import Tracklist from "./components/Tracklist/Tracklist";

const App = () => {
    const [tracks, setTracks] = useState([
        { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
        { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" }
    ]);
    const [playlistName, setPlaylistName] = useState("My Playlist");
    const [playlistTracks, setPlaylistTracks] = useState(tracks.slice(0, 1));

    return (
        <div>
            <h2>Playlist-Component</h2>
            <Playlist n/>
            <h2>SearchBar-Component</h2>
            <SearchBar />
            <h2>SearchResuls-Component</h2>
            <SearchResults tracks={tracks} />
            <h2>Track-Component</h2>
            <Track />
            <h2>Tracklist-Component</h2>
            <Tracklist />
            <h2>Some buttons</h2>
            <button>Save To Spotify</button>
            <button>Search</button>
        </div>
    );
};

export default App;
