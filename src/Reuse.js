import React from 'react'
import Reuse2 from './Reuse2'

function App () {
const users = [
{
name : 'Anil' , email : ' anil@test.com ' , contact : " 111 "
} ,
{name : 'Burce' , email : ' bruce@test.com ' , contact : " 222 "
} ,
{name : 'Peter' , email : ' peter@test.com ' , contact : " 333 "
} ,
{
name :'Sam' ,email : ' sam@test.com ' , contact : "444"
} ,
]
return(
<><h1> Reuse Component with List </h1> I
{
    users.map(item=>{
        return (<Reuse2 data={item.name}/>);
    })
}</>
);
}
export default App;