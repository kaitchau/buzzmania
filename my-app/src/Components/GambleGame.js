import React, { useState, useContext } from 'react';
import MyContext from "../index.js"

function GambleGame(props) {
  const [guess, setGuess] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const { score,setScore } = useContext(MyContext);

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 101); // Generate random number between 0-100
    const userGuess = parseInt(guess);

    if (userGuess >= 0 && userGuess <= 100) {
      if (randomNumber < userGuess) {
        // User wins
        const profit = parseInt(betAmount);
        setScore(score + profit);
        setResultMessage(`Congratulations! You won ${profit} points.`);
      } else {
        // User loses
        const loss = parseInt(betAmount);
        setScore(score - loss);
        setResultMessage(`Sorry, you lost ${loss} points.`);
      }
    } else {
      setResultMessage('Please enter a number between 0 and 100.');
    }
    setGuess('');
    setBetAmount('');
  };

  return (
    <div className="bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-lg shadow-lg" style={{ maxWidth: "213px"}}>
      <h2>Guessing Game</h2>
      <form onSubmit={handleGuessSubmit}>
        <input type="number" style={{ color: "black" }} value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess (0-100)" required />
        <input type="number" style={{ color: "black" }} value={betAmount} onChange={(e) => setBetAmount(e.target.value)} placeholder="Enter your bet amount" required />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{resultMessage}</p>
      
    </div>
  );
}

export default GambleGame;
