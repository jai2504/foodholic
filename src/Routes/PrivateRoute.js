import React, {useContext} from 'react'
import { Redirect,Route} from 'react-router-dom'
import {AuthContext} from '../config/Auth'

const PrivateRoute=({component:RouteComponent,...rest})=>{
    const {currentUser}=useContext(AuthContext)
    return(
        <Route {...rest} render={
            routeprops=>!!currentUser?(<RouteComponent {...routeprops}/>):(<Redirect to={'/login'} />)
        }
/>
    )
}

export default PrivateRoute