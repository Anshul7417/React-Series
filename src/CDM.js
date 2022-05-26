import React from 'react'
class CDM extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={name:"Anshul"}
  }
  componentDidMount()
  {
    console.warn("componentDidMount")

  }
  render()
  {
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Tripathi"})}>Update</button>
      </div>
    );
  }
}

export default CDM;