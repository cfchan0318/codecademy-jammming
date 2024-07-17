import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResults/SearchResult';
import Tracklist from './components/Tracklist/Tracklist';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResult/>
      <Tracklist/>
    </div>
  );
}

export default App;
