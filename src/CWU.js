import React from 'react'
class CWU extends React.Component{

    componentWillUnmount()
    {
        alert("componentWillUnmount is called")
    }
    render()
    {
        return<h1>Student Component</h1>
    }
}

export default CWU;