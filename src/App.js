import React, { useState } from "react";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Track from "./components/Track/Track";
import Tracklist from "./components/Tracklist/Tracklist";

const App = () => {
    const [tracks, setTracks] = useState([
        { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1", uri: "spotify:track:1" },
        { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2", uri: "spotify:track:2" },
        { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3", uri: "spotify:track:3" },
        { id: 4, name: "Track 4", artist: "Artist 4", album: "Album 4", uri: "spotify:track:4" },
        { id: 5, name: "Track 5", artist: "Artist 5", album: "Album 5", uri: "spotify:track:5" },
    ]);
    const [playlistName, setPlaylistName] = useState("My Playlist");
    const [playlistTracks, setPlaylistTracks] = useState(tracks.slice(0, 1));

    const addTrack = (track) => {
        if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
            return;
        }
        setPlaylistTracks([...playlistTracks, track]);
    };

    const removeTrack = (track) => {
        setPlaylistTracks(
            playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
        );
    };

    const handleNameChange = newName => {
        setPlaylistName(newName);
    };

    const savePlaylist = () => {
        const trackURIs = playlistTracks.map(track => track.uri);
        console.log("Saving playlist with URIs:", trackURIs); // Simulate saving to Spotify
        setPlaylistTracks([]); // Reset the playlist
        setPlaylistName("New Playlist"); // Reset the playlist name
    };

    return (
        <div>
            <h2>Playlist-Component</h2>
            <Playlist name={playlistName} tracks={playlistTracks} onRemove={removeTrack} onNameChange={handleNameChange} onSave={savePlaylist}/>
            <h2>SearchBar-Component</h2>
            <SearchBar />
            <h2>SearchResuls-Component</h2>
            <SearchResults tracks={tracks} onAdd={addTrack} />
            <h2>Track-Component</h2>
            <Track />
            <h2>Tracklist-Component</h2>
            <Tracklist onRemove={removeTrack} />
            <h2>Some buttons</h2>
            <button>Save To Spotify</button>
            <button>Search</button>
        </div>
    );
};

export default App;
