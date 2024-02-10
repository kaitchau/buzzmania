import React from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Flower from './Components/Flower';
import BeeWorker from './Components/BeeWorker';
import flower1 from './img/flower1.png';
import flower2 from './img/flower2.png';
import flower3 from './img/flower3.png';
import bee1 from './img/bee1.png';
import bee2 from './img/bee2.png';
import bee3 from './img/bee3.png';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <MainPage></MainPage>
        <div className="flower-grid">
          <Flower imagePath={flower1} />
          <BeeWorker imagePath={bee1} />
          <Flower imagePath={flower3} />
          <BeeWorker imagePath={bee2} />
          <Flower imagePath={flower2} />
          <BeeWorker imagePath={bee3} />

          <div className='test'>
            {/* <button type='submit'>test</button> */}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded">GAMBLING</button>
            
          </div>


          {/* <Flower imagePath={flower2} /> */}

          
          {/* <Flower imagePath={flower1} /> */}
    
          
          {/* <Flower imagePath={flower3} /> */}
        </div>
      </div>
      

    </div>
  );
}

export default App;
