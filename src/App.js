import styles from './App.module.css';
import Header from './components/Header/Header';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResults/SearchResult';



function App() {
  return (
    <div className={styles.App}>
      <Header />
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width:'60vw' }}>
          <SearchResult />
          <Playlist/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
