import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResults/SearchResult';

function App() {
  const [resultTracks, setResultTracks] = useState([
    {
      id: 1,
      name: "Whatever",
      artist: "Ado",
      album: "test1",
    },
    {
      id: 2,
      name: "Whatever",
      artist: "Ado",
      album: "test2",
    },
    {
      id: 3,
      name: "Whatever",
      artist: "Ado",
      album: "test3",
    },
    {
      id: 4,
      name: "Whatever",
      artist: "Ado",
      album: "test4",
    },
    {
      id: 5,
      name: "Whatever",
      artist: "Ado",
      album: "test5",
    },
  ])
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [PlaylistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (id) => {
    const track = resultTracks.filter(track=> track.id === id)[0]
    const isInPlaylist = PlaylistTracks.filter(track => track.id === id).length > 0;

    if (!isInPlaylist) {
      setPlaylistTracks([...PlaylistTracks, track]);
    } 
  }

  const removeTrackFromPlaylist = (id) => {
    const newTracklist = PlaylistTracks.filter(el => el.id !== id);
    setPlaylistTracks(newTracklist);
  }

  return (
    <div className={styles.App}>
      <Header />
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width:'60vw' }}>
          <SearchResult
            handleBtnOnClick={(id) => addTrackToPlaylist(id)}
            tracks={resultTracks} />
          <Playlist
            title={playlistTitle}
            handleTitleOnChange={(title) => setPlaylistTitle(title)}
            tracks={PlaylistTracks}
            handleRemoveTrack= {(id) => removeTrackFromPlaylist(id)}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
