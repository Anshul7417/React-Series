// const youtuber = 'Anshul Tripathi';

// const favprog = "React js";

// function myName(){

//     return  "Anshul";
// }

// function Petname(){
//     return  "sumi";
// }

// export default youtuber;   //default means ab hm kisi bhi naam se import kra skte h

// export {favprog,myName,Petname};




import react, { useState } from 'react';


const App = () => {
    const [names,setName] = useState("");

    const[lastName,setLastName] = useState("");
    const [fullName , setFullName]  = useState();

    const InputEvent = (event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    const inputEventTwo = (event) =>{
        setLastName(event.target.value);
    }

    const onSubmits = (event) =>{
        event.preventDefault();
        setFullName(names+" "+lastName);
    }

    
    return (<><div><form onSubmit={onSubmits}><h1>Hello {fullName}</h1><input type="text" placeholder='Enter your name' onChange = {InputEvent} value={names}/><br/><input type='text' placeholder='Enter your last name' onChange = {inputEventTwo} value = {lastName}/><button type='submit'>Click Me</button></form>
    </div></>);
}


export default App;