import React, { createContext } from "react";
import ComB from "./contextapi2";

const FirstName = createContext();
const LastName=createContext();
const App = () => {
    return (
        <><FirstName.Provider value={"Vinod"}>
        <LastName.Provider value={'Thapa'}>
        <ComB />
        </LastName.Provider>
        </FirstName.Provider></>)
}



export default ComA;
export {FirstName};