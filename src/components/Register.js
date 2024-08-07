import React from 'react';

function Register({ setIsRegister }) {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <button type="submit">Register</button>
          <button type="button" onClick={() => setIsRegister(false)}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
