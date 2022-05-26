import React from 'react'
class CDU extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={name:"Anshul"}
  }
  componentDidUpdate(prevProps,PreState,snapshot)
  {
    console.warn("componentDidUpdate", PreState);

  }
  render()
  {
    console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Update {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Tripathi"})}>Update</button>
      </div>
    );
  }
}

export default CDU;