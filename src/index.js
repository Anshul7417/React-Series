import React from 'react';
import ReactDOM from 'react-dom';

let curDate = new Date;
curDate =curDate.getHours();
let greeting ="";

if (curDate >= 1 && curDate <12) {
    greeting='good morning';
} else if (curDate >=12 && curDate <19) {
    greeting='good Afternoon';
} else{
    greeting='Good Night';
}



ReactDOM.render(<h1> Hello Sir , Good Morning</h1>,document.getElementById('root'))