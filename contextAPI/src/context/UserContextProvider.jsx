import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

/*
    since we want to provide context to all the child components so we directly return children providing them with 
    a value of user and a method to insert/modify value in the form of setUser
    { It ensures that whatever components are wrapped by UserContextProvider will have access to the context.}

    const [user , setUser] = useState(); => this need to manage the state of user

    wrapping the children in UserContext.Provider => React component that supplies the context value to all child 
    components that consume this context.

*/

