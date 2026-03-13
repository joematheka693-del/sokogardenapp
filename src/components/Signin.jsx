import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  // Define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  // Declare three additional hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below we have the useNavigate hook to redirect us to anothr page on successful login/signin
  const navigate =useNavigate()

  // Below is the function to handle the signin action
  const handlesubmit = async (e) => {
    // Prevent the site from reloading
    e.preventDefault()
    // Update the loading hook with a message
    setLoading("Please wait as we verify your account...")

    try{
      // Create a formData object that will hold the email and the password
      const formData = new FormData()

      // Insert/append the email and the password on the formData created.
      formData.append("email", email)
      formData.append("password", password)

      // Interact with axios for the response
      const response = await axios.post("http://frostyghost23.alwaysdata.net/api/signin", formData)

      // Set the loading hook back to default
      setLoading(""); 

      // Check whether the user exists as part of your response from the API
      if(response.data.user){
        // If user is there, definetly the details entered during signin are correct
        // setSuccess("Login successful")
        // If it is successful, let a person get redirected to another page
        navigate("/");
      }
      else{
        // User is not found, that means that the credentials entered on the form are incorrect
        setError("Login Failed. Please try again...") 
      }
    }
    catch(error){
      // Set loading back to default
      setLoading("")

      // Update the error hook with a message
      setError("Opps, something went wrong. Try again...")
    }

  }


  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <h1 className='text-dark'>Sign In</h1>

        <h5 className="text-info"> {loading} </h5>

        <h5 className="text-success"> {success} </h5>

        <h5 className="text-danger"> {error} </h5>

        <form onSubmit={handlesubmit}>
          <input type="email" 
          placeholder='Enter the Email Address' 
          className='form-control'
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br />

          {/* {email} */}

          <input type="password"
          placeholder='Enter the password' 
          className='form-control'
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/> <br />

          {/* {password} */}

          <input type="submit" 
          value="Sign In"
          className='btn btn-outline-primary' />
        </form>
      </div>
    </div>
  )
}

export default Signin;

// How to store the user details in the local storage
