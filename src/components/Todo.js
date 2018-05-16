import React from "react";
import PropTypes from "prop-types";
import uncheck from "../assets/uncheck.png";
import check from "../assets/check.png";
import edit from "../assets/edit.png";
import save from "../assets/save.png";

const Todo = ({
  onClick,
  onEditing,
  onEditTodo,
  isEditing,
  completed,
  text
}) => {
  let editText = text;

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {isEditing ? (
        <input
          placeholder={text}
          type="text"
          onChange={e => {
            editText = e.target.value;
          }}
        />
      ) : (
        text
      )}
      <span className="badge actions-container">
        <img
          onClick={isEditing ? () => onEditTodo(editText) : () => onEditing()}
          className="todo-icon"
          src={isEditing ? save : edit}
          alt=""
        />
        {!isEditing ? (
          <img
            onClick={onClick}
            className="todo-icon"
            src={completed ? check : uncheck}
            alt=""
          />
        ) : null}
      </span>
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
