import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div>
     <form>
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password"  required/>

    <label for="psw-repeat"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="confirm-password" required/>
    <hr/>
    <button type="submit" class="registerbtn">Register</button>
    <span>Already have account?</span><Link to={"/login"}>Log in</Link>
  </div>
  
</form>

    </div>
  )
}

export default Registration
