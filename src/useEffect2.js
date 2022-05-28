import React,{useEffect, useState} from 'react'
function App() {
  const [data,setData]=useState(10)
  const [count,setCount]=useState(100)
  useEffect(()=>{
      console.log("Anshul Tripathi");
  },[count]);
  return (
    <div className="App">
      <h2>{count + "       " + data}</h2>
      <button onClick={()=>setCount(count+1)} >Update Count</button>
      <button onClick={()=>setData(data+1)} >Update Data</button>
    </div>
  );
}

export default App;