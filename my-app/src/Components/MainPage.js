import { useContext, useEffect } from "react";

import MyContext from "../index.js"

function MainPage(props) {
    const { score,setScore } = useContext(MyContext);

    useEffect(() => {
        const interval = setInterval(() => {
          // Update the score by incrementing it by 1
          setScore(prevScore => prevScore + Math.floor(Math.random() * 11));
        }, 1000); // Update the score every 1000 milliseconds (1 second)
    
        return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts
      }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
    


  return (<>
   <header className="flex items-center justify-between bg-gray-800 px-6 py-4 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-yellow-500 font-serif mt-1">Buzz Mania 🍯</h1>
  <div className="flex items-center">
    <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg mr-4">
      <span className="text-xl font-semibold">{score}</span>
      <span className="text-lg"><strong> NECTAR</strong></span>
    </div>
  </div>
</header>







    </>
    );
}


export default MainPage;