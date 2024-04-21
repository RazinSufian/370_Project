// AuthPage.js

import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleForm = () => {
    setLogin((prev) => !prev);
  };

  return (
    <div className="auth-container">
      <div className={`auth-form ${isLogin ? 'login' : 'signup'}`}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          {isLogin ? (
            <input type="text" placeholder="Username or Email" />
          ) : (
            <>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </>
          )}
          <input type="password" placeholder="Password" />
          {!isLogin && <input type="password" placeholder="Confirm Password" />}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={toggleForm}>{isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}</p>
      </div>
    </div>
  );
};

export default AuthPage;
