import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDebounce } from "./debounce";

export const APIcalls = () => {
  const [data, setData] = useState([]);
  const [value1, setValue] = useState(null);

  const debounceFunc = useDebounce(value1, 500);

  function handleApiCall(value) {
    debugger;
    if (debounceFunc) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?userId=${Number(debounceFunc)}`
        )
        .then((resp) => {
          setData([]);
          console.log(resp.data, "resp called");
          if (resp.data) {
            setData(resp.data);
          }
        })
        .catch((err) => {
          console.log(err, "error ");
        });
    }
  }

  useEffect(()=>{
if(debounceFunc){
    handleApiCall(debounceFunc)
}
  },[debounceFunc])
  return (
    <div>
      APIcalls
      <input
        name="text"
        placeholder="search here"
        value={value1}
        onChange={(e) => 
           {
            setValue(e.target.value)
           
           }
        }
      />
      {data?.map((el) => {
        return (
          <div>
            user ID <div>: {el.userId}</div>
            ID <div>{el.id}</div>
            title <div>{el.title}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
