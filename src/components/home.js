import React,{useContext} from 'react'
import app from '../config/fire'
import {AuthContext} from '../config/Auth'

const Home=()=>{
    const {currentUser}=useContext(AuthContext)
    console.log(currentUser)
    return(
        <>
        {currentUser.email}
        <h1>
            hello world
        </h1>
        <button onClick={()=>app.auth().signOut()}>
                Sign Out
            </button>
        </>
    )
}

export default Home;