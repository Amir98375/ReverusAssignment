import { useState } from "react";
import CameraComponent from "./Camera";
import Todo from "./Todo";
import Home from "./Home.jsx";


function App() {
  const [cameraFlag, setCameraFlag] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  return (
    <div >
      {/* <div
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "100px",
          border: "2px solid black",
          alignSelf: "center",
          margin: "auto",
        }}
      ></div>
      <div
        style={{
          margin: "auto",
          display:'flex',
          justifyContent:'center'
        }}
      >
        <button onClick={() => setCameraFlag(!cameraFlag)}>Take pic</button>
      </div>
      {cameraFlag ? <CameraComponent /> : ""} */}

      {/* <Todo/> */}
      <Home/>
    </div>
  );
}

export default App;
