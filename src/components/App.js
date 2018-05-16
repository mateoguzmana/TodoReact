import React from "react";
import Header from "./Header";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

const App = () => (
  <div className="main-container container shadow-lg">
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
