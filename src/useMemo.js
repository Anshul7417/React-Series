import React, { useState, useMemo } from 'react'
function App() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  const newApple=useMemo(     // it takes a callback function iska mtlb hai ki yeh srf item k update hone pr chlega vrna hai ye hr brr chl rha tha
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    }
  ,[item])
  return (
    <div className="App">
      <h1> useMemo Hooks in React {count}</h1>
      {newApple}
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
  );
}

export default App;