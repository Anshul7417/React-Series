import React, { useState } from 'react';
function Student(props){
    const [name,setName]=useState("anshul");
    console.log(props)
    return(<>
        <h1>Props in React {props.name} {props.email}
        </h1>
        <p>{name}</p>
        <button onClick={()=>setName("Kaddu")}>Update Name</button>
    </>)
}


export default Student;