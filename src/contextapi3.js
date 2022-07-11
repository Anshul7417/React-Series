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