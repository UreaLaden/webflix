import * as React from 'react';
import {styles} from "./styles/App.css"
import NavBar from './components/NavBar';
import SearchBar from './components/Searchbar';
import Trending from './components/Trending';

function App() {
  return (
    <div className={styles.appContainer}>
      <NavBar/>
      <SearchBar/>
      <Trending/>
    </div>
  );
}

export default App;
