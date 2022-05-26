import react, { useState } from 'react';




//HOOKS  ---- doesnt work inside classes,hooks should always be used at top level of react functions




const Hook = () =>{
//   const [val , func] = useState(5)   // use state is a function which returns array of two items first is value that is passed another is function

  const [count , setCount]  = useState(0);
  const IncNum = () =>{
    // count++;           // now we cant change count bcz it is a state so we use hooks
    setCount(count+1);
    console.log("clicked");
  }

  return (<><h1>{count}</h1><button onClick={IncNum}>Click Me</button></>);
};


export default Hook;