import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { auth, signUpMail } from 'services/firebase';

import '../style.scss';

function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);

  const signUp = () => {
    if (!name) alert('Enter name');
    if (password === cpassword && password) {
      signUpMail(name, email, password);
      navigate('/signIn');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/');
  }, [user, loading]);

  const handleClick = () => {
    navigate('/signIn');
  };

  return (
    <form className='signup__form'>
      <div className='signup'>
        <h1 className='signup__title'>Sign up</h1>
        <h4 className='signup__subtitle'>
					Sign up and hop on to the food journey!
        </h4>
        <div className='signup__input'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Username'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
          <input
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            type='password'
            placeholder='Confirm Password'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email'
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type='text'
            placeholder='Phone Number'
          />
        </div>
        <button onClick={signUp} className='signup__button'>
					Sign Up
        </button>
        <div className='signup__social-login'>
          <p onClick={handleClick}> Or </p>
          <div className='signup__logo'>
            <div>
              <i style={{ color: '#1AC073' }} className='bx bxl-google'></i>
            </div>
            <div>
              <i className='bx bxl-facebook-circle'></i>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
