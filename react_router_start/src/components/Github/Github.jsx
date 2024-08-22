import React, { useEffect } from 'react'
import { useState } from 'react'
function Github() {

    const [user, setUser] = useState(0)

    useEffect(() => { 
        fetch('https://api.github.com/users/Ahs4nRaza')
        .then (res => res.json())
        .then (data => setUser(data))
    }, [])

  return (
    <div className='text-3xl font-bold text-center bg-gray-800 text-white' >
        Github Followers: {user.followers}
        <br></br>
        <img src={user.avatar_url}  width = {100} height = {100} alt = "user avatar" className='mx-auto align-middle'/>
        <br></br> 
        <br></br>
    </div>
  )
}

export default Github

/*
    The above mentioned way of loading data may introduce a little delay in the value loading due to fetch call.
    In order to optimize this we have a loader option in react router which leads to pre-fetching of data asa mouse hovers on link
    it fetches the data and stores it in cache which is made available to component using useLoaderData hook.

    import { useLoaderData } from 'react-router-dom'
    const data = useLoaderData()
    
    export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ahs4nRaza')
    return response.json()
    }

    this function is provided to loader to tell what to do when mouse hovers on the link


*/