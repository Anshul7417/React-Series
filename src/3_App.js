import {useState} from 'react'

function App() {
  const [data,setData]=useState(0);   //first data has val 0 and setdata is used to change its value
  function updateData()
  {
    setData(data+1)
   
  }
  console.warn("______");  //it does not render in case of var but in case of state
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;