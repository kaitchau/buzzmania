
function BeeWorker(props) {
    const handleClick = () => {
        alert("its clicked");
    }

    return (
    
    <a className="flower1" onClick={handleClick} style={{border: '2px solid black', display: 'inline-block' }}>
      <div><img src={props.imagePath} className="w-52" alt="Dynamic Flower" /></div>
      <div>{props.points}</div>
      <div>{props.timeout}</div>
     </a>
    );
  }



export default BeeWorker;