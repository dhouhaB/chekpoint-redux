import React from "react";
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
      <i
        className="fas fa-trash-alt"
        onClick={() => dispatch(deleteTodo(todo.id))}
      ></i>
      <EditTask todo={todo} />
    </li>
  );
};

export default Task;
