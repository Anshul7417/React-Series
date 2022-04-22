import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('kya dikhana h','kaha dikhana hai','callback');

// reactdom.render srf ek element krata hai render.enclose krdo ek tag m.hm array m bhi daal skte h tags ko , k sth
// ReactDOM.render(
// <div><h1>Hello world !!!</h1><p>i am learning reactjs</p><h2>i will definitely get 12 lpa</h2></div>,document.getElementById("root"));


// ReactDOM.render( React.createElement("h1",   hm isliye react import krare kyunki babel esa kr rha
// null,
// 'Anshul Tripathi'),
// document.getElementById("root"));


//babel converts modern js into js understandable by browser.babel is acompiler . webpack combines all our files in one place.

// var h1 = document.createElement("h1");    2 method for adding data

// h1.innerHTML = "Anshul Tripathi";
// document.getElementById("root").appendChild(h1);



//jsx means js extension or js xml



 // Fragments ek extra div bnane se bchata hai. vrna fr css m dikkt hogi.faster and consumes less memory  

//<> </> yeh synatic sugar form of fragments hai
// ReactDOM.render(   
//     <React.Fragment><h1>Hello world !!!</h1><p>i am learning reactjs</p><h2>i will definitely get 12 lpa</h2></React.Fragment>, document.getElementById("root"));

// const username= "anshul"    //react js expressions
// ReactDOM.render(<><h1>my name is {username}</h1><p>{3+2}</p></>,document.getElementById("root"));

//we cant use statements in braces (if else etc)


// template literals

const username= "anshul";
const lastname= "tripathi"    
ReactDOM.render(<><h1>{`my name is ${username} ${lastname}`}</h1></>,document.getElementById("root"));