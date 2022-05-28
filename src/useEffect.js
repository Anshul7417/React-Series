import React, { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  })
// }[count])    yha pr condition hai ki srf isi jgh pr chlega iske update hone pr
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default App;