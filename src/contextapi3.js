import React from "react";
import { FirstName } from "./contextapi";
const ComC = () => {
return (<><FirstName.Consumer>
    {(fname) => {
    return <h1> MY name is {fname}</h1>;
    }}
    </FirstName.Consumer> 
    </>)};

export default ComC;



// callback hell if lastname is to be transported


// <FirstName. Consumer>
// {(fname) => {
// return (
// <LastName. Consumer >
// {(1name) => {
// return (
// <h1>
// My name is {fname} {lname}
// </h1>
// );
// }}
// </LastName.Consumer >
// );
// }}
// </FirstName. Consumer>