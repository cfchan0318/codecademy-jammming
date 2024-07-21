import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResults/SearchResult';

import Spotify from './utils/spotify';

function App(props) {
  const [userToken, setUserToken] = useState('');
  const [acessToken, setAccessToken] = useState('');
  const [resultTracks, setResultTracks] = useState([])
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [PlaylistTracks, setPlaylistTracks] = useState([]);

  const getAuthHeader = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        `grant_type=client_credentials` +
        `&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}` +
        `&client_secret=${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
    })

    const body = await response.json()
    if (body.access_token) {
      return `Bearer ${body.access_token}`
    }
  }

  const search = async (keyword) => {
    console.log(acessToken);
    const headers = { Authorization: acessToken }
    const params = `type=track&q=${encodeURIComponent(keyword)}`
    const response = await fetch(`https://api.spotify.com/v1/search?${params}`, {
      headers: headers,
    });

    const res = await response.json()
    return res;
  }

  const handleSearchOnClick = async (keyword) => {
    if (!keyword) {
      return;
    }
    const result = await search(keyword)
    console.log(result);
    if (result) {
      const searchResult = result.tracks.items.map(row => {
        return {
          id: row.id,
          name: row.name,
          artist: row.artists.map(artist => artist.name).join(','),
          album: row.album.name,
          uri: row.uri
        }
      })

      setResultTracks(searchResult);
    }

  }

  useEffect(() => {
    const userToken = Spotify.getAccessToken();
    setUserToken(`Bearer ${userToken}`);
    getAuthHeader().then(token => {
      setAccessToken(token)
      console.log(token)
    })
  }, [])


  const addTrackToPlaylist = (id) => {
    const track = resultTracks.filter(track => track.id === id)[0]
    const isInPlaylist = PlaylistTracks.filter(track => track.id === id).length > 0;

    if (!isInPlaylist) {
      setPlaylistTracks([...PlaylistTracks, track]);
    }
  }

  const removeTrackFromPlaylist = (id) => {
    const newTracklist = PlaylistTracks.filter(el => el.id !== id);
    setPlaylistTracks(newTracklist);
  }

  const addPlaylistToSpotify = async () => {
    try {
      const userId = await Spotify.getUserId(userToken);
      const playlistId = await Spotify.createPlaylist(userToken, userId, playlistTitle);
      const uris = PlaylistTracks.map(track => track.uri);
      await Spotify.addTrackToPlaylist(userToken, playlistId, uris);

      setPlaylistTracks([]);
      setPlaylistTitle('');

    } catch (err) {
      console.log(err);
    }
    

  }

  const handleAddPlaylistOnClick = () => {
    addPlaylistToSpotify()
  }

  return (
    <div className={styles.App}>
      <Header />
      <SearchBar handleOnClick={(keyword) => { handleSearchOnClick(keyword) }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '60vw' }}>
          <SearchResult
            handleBtnOnClick={(id) => addTrackToPlaylist(id)}
            tracks={resultTracks} />
          <Playlist
            title={playlistTitle}
            handleTitleOnChange={(title) => setPlaylistTitle(title)}
            tracks={PlaylistTracks}
            handleRemoveTrack={(id) => removeTrackFromPlaylist(id)}
            handleAddPlaylistOnClick={() => handleAddPlaylistOnClick()}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
