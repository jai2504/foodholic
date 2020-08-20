import React, { useContext ,useCallback} from 'react'
import '../assets/css/style.css'
import {AuthContext} from '../config/Auth'
import app from '../config/fire'
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom'
const Login = ({history}) => {
    const handleLogin=useCallback(async event=>{
        event.preventDefault()
        const {email,password}=event.target.elements;
        try{
           app.auth().signInWithEmailAndPassword(email.value,password.value)
            history.push('/')
        }catch(error){
            alert(error)
        }
    },[history]);

    const {currentUser}=useContext(AuthContext)
    if(currentUser){
       return <Redirect to= "/" />;
    }

    return (
            <div className="row h-100 justify-content-center align-items-center" style={{width:"100%"}}>
                <div className="col-10 col-md-5 col-lg-6 "style={{width:"35%"}}>
                    <form className="form-example" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control email" id="email" placeholder="Email..." name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control password" id="password" placeholder="Password..." name="password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-customized">Login</button>
                    </form>
                </div>
                <div style={{width:"65%"}} className="col-md-7">
                    <h2>
                        If not having account <Link to="/signup">Click Here</Link>
                    </h2>
                </div>
            </div>  
    )
}

export default Login;