import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <form>
  <div class="container">
    <h1>Login</h1>
    <p>Login to shop</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password"  required/>

    <button type="submit" class="registerbtn">Submit</button>
    <span>Not a member?</span><Link to={"/register"}>Register</Link>
  </div>
  
</form>
    </div>
  )
}

export default Login
