import { useState } from 'react';
import './App.css';
import Header from './structures/header/header';
import Homepage from './structures/homepage/homepage';
import homepage from './structures/homepage/homepage';

function App() {
  const [onPage, setOnPage] = useState('homepage');
  const changePage = (page) => {
    setOnPage(page);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header changePage={changePage}/>
      </header>
     <Homepage onPage={onPage}/>
    </div>
  );
}

export default App;
