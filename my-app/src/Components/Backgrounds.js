function Backgrounds(props) {
    const handleClick = () => {
        alert("its clicked");
    }

    return (
       <>
       <a className="backgrounds block border-2 border-black inline-block p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out" onClick={handleClick}>
          <div className="mb-2 w-60">
            <img src={props.imagePath} alt="Dynamic Bee" />
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold">{props.points} Points</span>
            <span className="block text-sm">{props.timeout} Timeout</span>
          </div>
        </a>
       </>
      );
  }



export default Backgrounds;