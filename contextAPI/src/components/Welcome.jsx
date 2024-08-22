import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Welcome() {
    // Use useContext hook to access the UserContext
    const { user } = useContext(UserContext);

    // Check if the user is not logged in
    if (!user) 
       return <div>Please login</div>;
    

  
    return <div>Welcome {user.username.toUpperCase()} !</div>;
}

export default Welcome