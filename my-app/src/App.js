import {React, useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Flower from './Components/Flower';
import BeeWorker from './Components/BeeWorker';
import GambleGame from './Components/GambleGame';
import flower1 from './img/flower1.png';
import flower2 from './img/flower2.png';
import flower3 from './img/flower3.png';
import bee1 from './img/bee1.png';
import bee6 from './img/bee6.png';
import queenbee from './img/queenbee.png';

function App() {

  const [showGuessingGame, setShowGuessingGame] = useState(false);

  const handleGamblingButtonClick = () => {
    setShowGuessingGame(true);
  };

  return (
    <div className="App">
      <div className='left'>
        <MainPage></MainPage>
        <div className="flower-grid">
          <Flower imagePath={flower1} points={100}/>
          <BeeWorker imagePath={bee1} points={5000} name={"Billy"}/>
          <Flower imagePath={flower2} points={500}/>
          <BeeWorker imagePath={bee6} points={10000} name={"Bob"}/>
          <Flower imagePath={flower3} points={1000}/>
          <BeeWorker imagePath={queenbee} points={300000} name={"Queen Bee"}/>


          <div className='test'>
              {showGuessingGame ? (
                <GambleGame />
              ) : (
                <button onClick={handleGamblingButtonClick} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-8 px-16 rounded">MINI GAME</button>
              )}
            </div>


        </div>
      </div>
      
    </div>
  );
}

export default App;

