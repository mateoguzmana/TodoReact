import React from "react";

const _getDate = () => {
  let date = new Date();
  let weekday = new Array(7);
  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[date.getDay()];
};

const Header = () => (
  <div className="container">
    <hr />
    <div className="text-light">
      <h1>Todo App</h1>
    </div>
    <p className="text-light">{`Do you have something important to do today ${_getDate()}?`}</p>
  </div>
);

export default Header;
