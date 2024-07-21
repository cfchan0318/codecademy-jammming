const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    async getUserId(accessToken) {
        const res = await fetch('https://api.spotify.com/v1/me', { headers: { Authorization: accessToken } })
        const userProfile = await res.json()
        return userProfile.id;
        
    },
    async createPlaylist(accessToken,userId, name) {
        
        const body = {
            "name": name,
            "description": "Created By Jammming",
            "public": true
        }
    
        const res = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken
            },
            body: JSON.stringify(body)
        });

        if (res) {
            const response = await res.json()
            return response.id;
        }
    },
    async addTrackToPlaylist(accessToken, playlistId, uris) {
        if (uris.length === 0) {
            throw new Error('playlist is empty')
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: accessToken
        }
        const body = JSON.stringify({
            "uris": uris,
            "position": 0
        })

        await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: headers,
            body: body
        });
        
    }
}

export default Spotify;