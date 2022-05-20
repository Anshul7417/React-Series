import React from 'react';
import ReactDOM from 'react-dom';
import Prop from './Prop';
import { add, sub, mult, div } from "./Calc";
// import * as all from './App.jsx';    // this gives everything from app.js in object form ... write all.default for youtuber
// import  youtuber ,{favprog,myName,Petname} from "./App.jsx"

// ReactDOM.render(<><ol><li>My name is</li><li>{youtuber}</li><li>{favprog}</li><li>{myName()}</li><li>{Petname()}</li></ol></>,document.getElementById('root')); 

// ReactDOM.render(<><ul><li>Sum of two no is {add(40,4)}</li><li>Sub of two number is {sub(40,4)}</li></ul></>,document.getElementById('root'))



//PROPS    ---- like functions args in js.simple component se values bhejo vha receive krlo. We can also create array of an object to more simplify react...dont use keyword anywhere.


ReactDOM.render(
    <> 
    <Prop
    sname ='Extra curricular'    // after array use sname={arr[0].sname}
    title='A Netflix Original'
    imgsrc="https://picsum.photos/200/300"
    link='https://www.netflix.com/in/title/80990668?source=35' /> 
       <Prop
    sname ='Extra curricular'
    title='A Netflix Original'
    imgsrc="https://picsum.photos/200/305"
    link='https://www.netflix.com/in/title/80990668?source=35' /> </>
  ,document.getElementById('root')
);




//HOOKS  ---- doesnt work inside classes,hooks should always be used at top level of react functions



