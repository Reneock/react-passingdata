import React, {useState} from "react";
import './App.css';
import Callback from "./callback"

//Parent
export default function App() {
  const [UIcolor, setUIColor] = useState(null);

  //our callback function
  const getColor = (color) => {
    setUIColor(color);
  };



  return (
    <div className="App">
      <div className="container" style={{background: `${UIcolor}`}}></div>
      <Callback className="minor" getColor={getColor} />
    </div>
  );
}

