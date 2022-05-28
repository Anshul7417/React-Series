import React from 'react'
import User from './LSU3'
function App() {
  function getName(name)
  {
    alert(name)
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User name = "Anshul "getData={getName} />
    </div>
  );
}

export default App;