import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, editingTodo, editTodo, deleteTodo }) => {
  const _onClick = todo => {
    toggleTodo(todo.id);
  };

  const _onEditing = todo => {
    editingTodo(todo.id);
  };

  const _onEditTodo = (id, text) => {
    editTodo(id, text);
    editingTodo(id);
  };

  const _onDeleteTodo = todo => {
    deleteTodo(todo.id);
  };

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => _onClick(todo)}
          onEditing={() => _onEditing(todo)}
          onEditTodo={(text) => _onEditTodo(todo.id, text)}
          onDelete={() => _onDeleteTodo(todo)}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editingTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
