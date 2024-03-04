
import { useState } from 'react';
import CameraComponent from './Camera';
import Todo from './Todo';

function App() {
  const [cameraFlag,setCameraFlag]=useState(false)
  return (
    <div className="App">
      <button onClick={()=>setCameraFlag(!cameraFlag)}>Take pic</button>
      {cameraFlag?<CameraComponent/>:''}

{/* <Todo/> */}
    </div>
  );
}

export default App;
