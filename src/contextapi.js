import React, { createContext } from "react";
import ComB from "./contextapi2";

const FirstName = createContext();
const App = () => {
    return (
        <><FirstName.Provider value={"Vinod"}>
            <ComB />
        </FirstName.Provider></>)
}



export default ComA;
export {FirstName};