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
    <div className="justify-content-center add-todo">
      <form onSubmit={_onSubmit}>
        <div className="input-group mb-3">
          <input
            ref={node => (addTodoInput = node)}
            className="form-control"
            placeholder="Something to do..."
            aria-label="Something to do..."
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
