import React from "react";
import "./Task.css"
import { useDispatch } from "react-redux";
import EditTask from "../EditTask/EditTask";
import { completeTodo, deleteTodo } from "../js/Actions/actions";


const Task = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-card">
      <span
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
        className="todo-text"
        onClick={() => dispatch(completeTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button className= "designbutton1"
        
        onClick={() => dispatch(deleteTodo(todo.id))}
      >X </button>
      <EditTask todo={todo} />
    </li>
  );
};

export default Task;
