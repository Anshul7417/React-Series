import { useParams,useLocation,useHistory } from 'react-router-dom';


<Route path="/user/:fname/:lname" component={User}></Route>

const User = () => {
    const { fname, lname } = useParams();    // it shows parameter
    const location = useLocation();      // it shows url
    const history = useHistory();
    return (<><h1>{fname}{lname} <br>{location.pathname}</br></h1><button onClick={()=>history.goBack()}>Go Back</button></>
        
    );
};