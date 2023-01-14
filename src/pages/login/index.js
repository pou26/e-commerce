import React from 'react';
import BrandLogo from 'images/amazon-logo2.png';
import { Link } from 'react-router-dom';
import './login.css'
import {useRef,useState,useEffect} from 'react'
// import { setUISelectionRaw } from '@testing-library/user-event/dist/types/document/UI';
// import React from 'react';

// import BrandLogo from 'images/amazon-logo.png';
// import { Link } from 'react-router-dom';

// import './Logo.scss';

// function Logo({ country = 'in' }) {
//   return (
//     <Link to="/" className="logo">
//       <img className="logo__img" alt="Amazon" src={BrandLogo} />
//       {country && <span className="logo__country">.{country}</span>}
//     </Link>
//   );
// }

// export default Logo;

function LoginPage() {
  const userRef= useRef();
  const errRef= useRef();

  // const[user,setUser]=useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [errMsg,setErrMsg]=useState('');
  const[success,setSuccess]=useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[])

  useEffect(()=>{
    setErrMsg('');
  },[email,password])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(email,password);
    setEmail('');
    setPassword('');
    setSuccess(true);
  }

  const signIn=e=>{
    e.preventDefault();
  }
  const register= e=>{
    e.preventDefault();
  }
  return (
    <>
    {success ? (
      <section>
        <h1>Successfully logged in!</h1>
        <br />
        <p>
          {/* <a href="#">Home</a> */}
        </p>
      </section>
    ) :(
    <section>
    <p ref={errRef} className={errMsg ? "errmsg":"offscreen"}aria-live="assertive">
    {errMsg}
    </p>
    <div className='login'>
      <Link to="/" className="logo">
        
        <img className="logo__img" alt="Amazon" src={BrandLogo} />
        

      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
          {/* <h5>E-mail or phone number</h5> */}
          <label htmlFor="email">E-mail or phone number</label>
          <input type='text' id="email" ref={userRef} value={email} onChange={e=>setEmail(e.target.value)} required />
          {/* <h5>Password</h5> */}
          <label htmlFor="password">Password</label>
          <input type='password' id="password" value={password} onChange={e=>setPassword(e.target.value)}/>
          <button type='submit' onClick={signIn}className="login_button">Continue</button>
        </form>
        <p className="privacy">
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice
        </p>
        <ul>
          <li>Need help?</li>
        </ul>
        <p className="text">New to Amazon?
        {/* <br />
        <span className="line">
          <a href="#"></a>
        </span> */}
        </p>
        <button onClick={register} className="signup_button" a href="#">Create your Amazon account</button>
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
  </section>
     )}
     </>
  )
}

export default LoginPage;
