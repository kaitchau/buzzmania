import {useContext} from "react";
import MyContext from "../index.js"

function Flower(props) {

    const { score,setScore } = useContext(MyContext);

    const handleClick = () => {
        // Update the score when the flower is clicked
        setScore(prevScore => prevScore + props.points);
        // alert("Clicked! Score updated."); // Optionally, show an alert
    }

    return (
        <a className="flower1 block border-2 border-black inline-block p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out" onClick={handleClick}>
          <div className="mb-2">
            <img src={props.imagePath} className="w-52 mx-auto" alt="Dynamic Flower" />
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold">{props.points} Points</span>
            <span className="block text-sm">{props.timeout} Timeout</span>
          </div>
        </a>
      );
    }


  const element = <Flower image="../img/flower1.png"/>;

export default Flower;