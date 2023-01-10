import React from 'react';
import BrandLogo from 'images/amazon-logo2.png';
import { Link } from 'react-router-dom';
import './login.css'

function LoginPage() {
  return (
    <div className='login'>
      <Link to="/" className="logo">
        
        <img className="logo__img" alt="Amazon" src={BrandLogo} />

      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail or phone number</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' /><br/><br/>
          <button>Continue</button>
        </form>
        <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice
        </p>
        <h4>Need help?</h4>
        <button>Create your Amazon account</button>
        <table>
          <tr>
            <td>Conditions of Use</td>
            <td>Privacy Notice</td>
            <td>Help</td>
          </tr>
        </table>
        <p className='copyright'>
        © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>

  </div>
  )
}

export default LoginPage;
