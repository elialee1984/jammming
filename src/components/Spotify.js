const clientId = "8ec87fb71cdb4e968bee10f6f1fff7f5";
const redirectUri = "http://localhost:3000/";
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch =
            window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access Token", null, "/");
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        const url = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
            term
        )}`;

        return fetch(url, { headers: headers })
            .then(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Request failed!");
                },
                (networkError) => console.log(networkError.message)
            )
            .then((jsonResponse) => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map((track) => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri,
                }));
            });
    },

    getUserId() {
        const headers = { Authorization: `Bearer ${this.getAccessToken()}` };
        return fetch('https://api.spotify.com/v1/me', { headers: headers })
            .then(response => response.json())
            .then(jsonResponse => jsonResponse.id);
    },
};

export default Spotify;
