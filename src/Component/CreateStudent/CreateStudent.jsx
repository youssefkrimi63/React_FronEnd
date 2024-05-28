import React from 'react';
import './CreateStudent.css'; // Import the CSS file
import Navbar from '../navbar/Navbar'; // Correct import statement
export default function CreateStudent() {
  return (

    <>
    
    <div className='create'>

    <Navbar />
    

    <div className='createform'>
      <form className="formRe">
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>

        <label>
          <input className="inputrg" type="text" placeholder="" required />
          <span>Name</span>
        </label>


        <label>
          <input className="inputrg" type="email" placeholder="" required />
          <span>Email</span>
        </label>
        <label>
          <input className="inputrg" type="password" placeholder="" required />
          <span>Password</span>
        </label>
        <label>
          <input className="inputrg" type="password" placeholder="" required />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">Already have an account? </p>
      </form>
    
    
      </div>
    </div></>
  );
}
