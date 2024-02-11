import React, { useState } from 'react';

function GambleGame(props) {
  const [guess, setGuess] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [points, setPoints] = useState(100); // Initial points

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * 101); // Generate random number between 0-100
    const userGuess = parseInt(guess);

    if (userGuess >= 0 && userGuess <= 100) {
      if (randomNumber < userGuess) {
        // User wins
        const profit = parseInt(betAmount);
        setPoints(points + profit);
        setResultMessage(`Congratulations! You won ${profit} points.`);
      } else {
        // User loses
        const loss = parseInt(betAmount);
        setPoints(points - loss);
        setResultMessage(`Sorry, you lost ${loss} points.`);
      }
    } else {
      setResultMessage('Please enter a number between 0 and 100.');
    }
    setGuess('');
    setBetAmount('');
  };

  return (
    <div>
      <h2>Guessing Game</h2>
      <form onSubmit={handleGuessSubmit}>
        <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess (0-100)" required />
        <input type="number" value={betAmount} onChange={(e) => setBetAmount(e.target.value)} placeholder="Enter your bet amount" required />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{resultMessage}</p>
      <p>Points: {points}</p>
    </div>
  );
}

export default GambleGame;
