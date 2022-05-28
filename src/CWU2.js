import React from 'react'
import CWU from './CWU'
class CWU2 extends React.Component {
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show?<CWU />
          :<h4>Component is removed</h4>
        }
        <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
      </div>
    )
  }
}

export default CWU2;