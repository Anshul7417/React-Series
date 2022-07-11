import React, { useContext } from "react";
import { FirstName } from "./contextapi";
const ComC = () => {
    const fname = useContext(FirstName);
    return (
        <h1>
            My name is {fname}
        </h1>)
};