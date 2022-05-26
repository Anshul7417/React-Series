import React from 'react';

class App2 extends React.Component{
    constructor(){
        super();   //it invokes parent constructor
        this.state={
            // data:"anshul",
            data:1,
        }
    }

    apple(){
        // this.setState({data:"sumi"});
         this.setState({data:this.state.data+1});
    }

    render(){
        return (
            <>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update data</button>
            </>
        )
    }

}

export default App2;
