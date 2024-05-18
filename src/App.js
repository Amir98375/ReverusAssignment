import { useState } from "react";
import CameraComponent from "./Camera";
import Todo from "./Todo";
import Home from "./Home.jsx";
import { ChatApp } from "./ChatApp.jsx";
import { MyWorker } from "./MyWorker.jsx";
import { APIcalls } from "./APIcalls.jsx";
import TableApp from "./Table.jsx";





function App() {
  // const [cameraFlag, setCameraFlag] = useState(false);
  // const [imageUri, setImageUri] = useState(null);

  // function myConstructor(name,age,role){
  //   this.name=name
  //   this.age=age
  //   this.role=role
  // }
  
  // let obj=new myConstructor("Amir",25,"Dev")
  // console.log(obj)
  return (
<>
<TableApp/>
{/* <MyWorker/>
<APIcalls/> */}

</>
  );
}

export default App;
