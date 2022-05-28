import React, {PureComponent} from 'react'
class  App extends PureComponent {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (<>{console.log('render')}
  <div className="App">
   <h1>Count ::::::{this.state.count}</h1>
    <button 
    onClick={()=>{this.setState({count:this.state.count})}}
    >Update Count</button>
  </div></>
    
  );
 }
}

export default App;