import { useContext, useState} from "react";
import MyContext from "../index.js"

function BeeWorker(props) {
  const { score, setScore } = useContext(MyContext);
  const [purchased, setPurchased] = useState(false);

  const handleClick = () => {
    if (score >= props.points) {
      setPurchased(true);
    } else {
      alert("Not enough points to purchase this bee!");
    }
  };

  if (purchased) {
    setInterval(() => {
      setScore((prevScore) => prevScore + Math.floor(props.points/100));
    }, 1000); // props.timeout is in seconds, convert to milliseconds
  }

  return (
      <a className="bee-worker block border-2 border-black inline-block p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out" onClick={handleClick}>
        <div className="mb-2">
          <img src={props.imagePath} className="w-52 mx-auto" alt="Dynamic Bee" />
        </div>
        <div className="text-center">
          <span className="block text-xl font-bold">{props.points} Berry</span>
          <span className="block text-sm">{props.timeout} Timeout</span>
        </div>
      </a>
    );
  }



export default BeeWorker;