import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let addTodoInput;

  const _onSubmit = e => {
    e.preventDefault();
    if (addTodoInput.value == "") {
      return;
    }
    dispatch(addTodo(addTodoInput.value));
    addTodoInput.value = "";
  };

  return (
    <div>
      <form onSubmit={_onSubmit}>
        <input ref={node => (addTodoInput = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
