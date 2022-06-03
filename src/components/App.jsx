import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date().getHours()

function App() {
  return <div className="container">{
    // isLoggedIn === true ? <h1>Hello</h1> : <Login />  //ternary operator refactoring if/else statement
    // currentTime > 7 ? <h1>Why are you still working?</h1> : null  
    currentTime > 7 && <h1>Why are you still working?</h1>  //refactored using && operator, checking if two conditions are true
  }</div>;
}
export default App;
