import axios from 'axios';
import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {
  // Initialixe the hooks
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  // Define three states an application will move to
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below is a function that will handle the submit action
  const handleSubmit = async(e) => {
    // Below will prevent our sit from reloading
    e.preventDefault()

    // Update our loading hook with a message that will be displayed to the user who are trying to register
    setLoading("Please wait as registration is in progress...")

    try{
      // Create a form data object that will enable you to capture the four details entered on the form
      const formdata = new FormData();

      // Insert the four details (username , email, password, phone) in terms of key - value pairs
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      // By use of axios we can access the method post 
      const response =await axios.post("http://frostyghost23.alwaysdata.net/api/signup", formdata)

      // Set back the loading to default
      setLoading("");

      // Just in case everything goes on well, update successfull
      setSuccess(response.data.message)

      // Clear your hooks 
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    }
    catch(error){
      // set the loading back to default
      setLoading("");

      // Update the error hook with the message given back from the response
      setError(error.message)
    }
  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className="card col-md-6 shadow p-4">
        <h1 class="text-success">Sign Up</h1> <br />

        <h5 className="text-warning"> {loading} </h5>

        <h3 className="text-success"> {success} </h3>

        <h4 className="text-danger"> {error} </h4>

        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Enter the Username'
          className='form-control'
          value={username} // Bind the username variable.
          onChange={(e) => setUsername(e.target.value)} // Event - can be triggered by use of mouse/keyboard in js.
          required /> <br />

          {/* {username} */}

          <input type="email"
          placeholder='Enter the Email Address'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required /> <br />

          {/* {email} */}

          <input type="password"
          placeholder='Enter the Password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required /> <br />

          {/* {password} */}

          <input type="number"
          placeholder='Enter the Mobile Phone number'
          className='form-control'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required /> <br />

          {/* {phone} */}


          <input type="submit" value="Sign Up" className='btn btn-success' /> <br /> <br />
          
          Already have an account? <Link to={'/signin'}>Sign In</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;

// Research on Axios module in reactjs
