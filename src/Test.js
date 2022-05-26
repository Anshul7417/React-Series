export default function Test(){
    let data = 'Anshul Tripathi';
    function Apple(){
        data='Sumi'; // onclick pr data change hora pr dom pr reflect nhi krra
        alert(data);
    }
    return (
        <><div>Hello World !{data}</div>
        <button onClick={Apple}>Click Me</button></>  //braces mt lgao vrna khud call ho jayega,arrow function use kro agr inline define kr rhe ho toh vrna fr se automatic call hoga
    )
}