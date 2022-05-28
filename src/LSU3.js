function User(props)
{
    const name="Anshul Tripathi"
    return(
        <div>
            <h1>User Name is : {props.name} </h1>
            <button onClick={()=>props.getData(name)} >Click Me</button>
        </div>
    )
}

export default User;