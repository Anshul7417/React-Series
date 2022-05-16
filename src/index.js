import React from 'react';
import ReactDOM from 'react-dom';
import {add , sub , mult ,div } from "./Calc";
// import * as all from './App.jsx';    // this gives everything from app.js in object form ... write all.default for youtuber
// import  youtuber ,{favprog,myName,Petname} from "./App.jsx"

// ReactDOM.render(<><ol><li>My name is</li><li>{youtuber}</li><li>{favprog}</li><li>{myName()}</li><li>{Petname()}</li></ol></>,document.getElementById('root')); 

ReactDOM.render(<><ul><li>Sum of two no is {add(40,4)}</li><li>Sub of two number is {sub(40,4)}</li></ul></>,document.getElementById('root'))

