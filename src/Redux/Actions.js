
import { Add_TODO, Delete_TODO, Modify_Todo, clearAllTodo } from "./ActionType"


export const AddTodo=(payload)=>{
  debugger
    return{
      type:Add_TODO,
      payload
    }
}

export const DeleteTodo=(payload)=>{
  debugger
    return{
      type:Delete_TODO,
      payload
    }
}
export const ModifyTodo=(payload)=>{
  debugger
    return{
      type:Modify_Todo,
      payload
    }
}
export const ClearAll=(payload)=>{
  debugger
    return{
      type:clearAllTodo,
      payload
    }
}