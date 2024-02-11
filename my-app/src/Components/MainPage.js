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
    <header className="flex items-center justify-center">
      <h1 className="text-yellow-500 text-4xl font-bold">Buzz Mania</h1>
      <div className="border-2 bg-slate-200 w-52 border-black text-2xl rounded-lg ml-10">
        {score} Nectar
      </div>
      
      <p>{setScore}</p>
    </header>
    </>
    );
}


export default MainPage;