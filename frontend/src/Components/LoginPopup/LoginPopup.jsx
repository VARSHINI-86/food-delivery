import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState('Sign Up');
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [showGoogleLogin, setShowGoogleLogin] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = currState === 'Login' ? '/api/user/login' : '/api/user/register';
    const response = await axios.post(url + newUrl, data);

    if (response.data.success) {
      if (currState === 'Login') {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        setCurrState('Login');
        setData({ name: '', email: '', password: '' });
      }
    } else {
      alert(response.data.message);
    }
  };

  const onGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const response = await axios.post(`${url}/api/user/google-login`, {
        token: credentialResponse.credential,
      });

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error('Google login failed', err);
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
        </div>
        <div className='login-popup-input'>
          {currState === 'Login' ? null : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Your email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Password'
            required
          />
        </div>
        <button type='submit'>
          {currState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {/* Google login icon-only button */}
        <div className='google-icon-button'>
          <GoogleLogin
            onSuccess={onGoogleSuccess}
            onError={() => console.log('Login Failed')}
            useOneTap={false}
            auto_select={false}
            theme="outline"
            size="small"
            width="auto"
            text="signin_with"
            ux_mode="popup"
            shape="circle"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className='only-google-icon'
                title="Sign in with Google"
              >
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
              </button>
            )}
          />
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
