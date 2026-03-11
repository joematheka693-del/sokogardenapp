import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  // Initialixe the hooks
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <div className='row justify-content-center mt-4'>
      <div className="card col-md-6 shadow p-4">
        <h1 class="text-success">Sign Up</h1> <br />

        <form>
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


          <input type="button" value="Sign Up" className='btn btn-success' /> <br /> <br />
          
          Already have an account? <Link to={'/signin'}>Sign In</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;

// Research on Axios module in reactjs
