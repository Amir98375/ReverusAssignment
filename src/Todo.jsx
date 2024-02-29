import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, ClearAll, DeleteTodo, ModifyTodo } from "./Redux/Actions";
import "./App.css";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [state, setState] = useState(["abcde", "efgh"]);
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo.todoList);
  const [todoArray, setTodoArray] = useState(todoData);
  const [inputText, setInputText] = useState(null);
  const [stateTrue, setstateTrue] = useState(true);
  const [left, setLeft] = useState(0);

  console.log(todoData, "todoData");

  const addTodoFunc = (e) => {
    debugger;
    console.log(e, "event");
    if (e.keyCode === 13) {
      if (inputText) {
        dispatch(AddTodo(inputText));

        setTodoArray(todoData);
        setInputText("");
      }
    }
  };
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < todoData.length; i++) {
      console.log(todoData[i], "trye");

      if (!todoData[i].check) {
        count++;
      }
      setLeft(count);
    }
    setTodoArray(todoData);
  }, [todoData]);

  const deleteDataFromList = (element, index) => {
    console.log(element, index);
    dispatch(DeleteTodo({ element, index }));
    setTodoArray(todoData);
  };
  const ModifyTodoFromList = (index) => {
    dispatch(ModifyTodo({ index, inputText }));
    setInputText("");
  };
  const enabledField = () => {
    debugger;
    setstateTrue(false);
  };
  const clearAllFunc = () => {
    dispatch(ClearAll());
    setTodoArray([]);
  };

  const allFunc = () => {
    setTodoArray(todoData);
  };
  const CompleteFunc = () => {
    let compFilter = todoData.filter((el) => el.check === true);
    setTodoArray(compFilter);
  };
  const ActiveFunc = () => {
    let activeFilter = todoData.filter((el) => el.check === false);
    setTodoArray(activeFilter);
  };

  return (
    <>
      <div className="container">
        <h1 style={{color:'white'}}>TODO</h1>
        <div>
          <input
            type="text"
            placeholder="Create a new todo here"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={addTodoFunc}
            className="inputTag"
          />
          {/* <button onClick={()=>{addTodoFunc()}}>Add</button> */}
        </div>
        <div className="containerTodo">
          {todoArray?.map((el, index) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id="checkbox1"
                  checked={el.check}
                  onClick={() => {
                    ModifyTodoFromList(index);
                  }}
                ></input>
                <input
                  //  className="inputTag"
                  type="text"
                  value={el.item}
                  disabled={stateTrue}
                  onClick={() => enabledField(index)}
                />
                <button onClick={()=>deleteDataFromList(el,index)}>X</button>
              </div>
            );
          })}
        </div>
        <div className="divButton">
          <button style={{ width: "20%" }}>{left} item left</button>
          <button onClick={allFunc}>All</button>
          <button onClick={ActiveFunc}>Active</button>
          <button onClick={CompleteFunc}>completed</button>
          <button onClick={clearAllFunc}>clear all</button>
        </div>
      </div>
    </>
  );
}

export default Todo;
