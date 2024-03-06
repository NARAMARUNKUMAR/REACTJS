import React  from "react";
const Login=()=>{
    return(
        <>
        <div>
            <h1>New User Login Form</h1>
            UserName:<input type="text" name="uname"></input><p></p>
           Password:<input type="password" name="password"></input><p></p>
            <input type="Submit" value="Login"></input>
        </div>
        </>
    )
}
export default Login;