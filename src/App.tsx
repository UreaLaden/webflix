import * as React from 'react';
import {styles} from "./styles/App.css"
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={styles.appContainer}>
      <NavBar/>
    </div>
  );
}

export default App;
