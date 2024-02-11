// App.js
import React from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Flower from './Components/Flower';
import BeeWorker from './Components/BeeWorker';
import Points from './Components/Points';
import flower1 from './img/flower1.png';
import flower2 from './img/flower2.png';
import flower3 from './img/flower3.png';
import bee1 from './img/bee1.png';
import bee2 from './img/bee2.png';
import bee3 from './img/bee3.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <MainPage />
      </header>

      <div className="content">
        <div className="left">
          <div className="flower-grid">
            <Flower imagePath={flower1} points={5} />
            <Flower imagePath={flower2} points={20} />
            <Flower imagePath={flower3} points={100} />
          </div>
        </div>

        <div className="right">
          <div className="beehive">
            <h2>Beehive</h2>
            <BeeWorker imagePath={bee1} points={100}/>
            <BeeWorker imagePath={bee2} points={1000}/>
            <BeeWorker imagePath={bee3} points={10000}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
