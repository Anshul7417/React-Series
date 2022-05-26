import { useState } from 'react'
function Cond() {
    const [loggedIn, setLoggedIn] = useState(3)
    return (
        <div>
            {loggedIn==1?
            <h1>Welcome User 1</h1>
            :loggedIn==2?<h1>Welcome User2</h1>
            :<h1>Welcome User3</h1>}
        </div>
    )

}

export default Cond;