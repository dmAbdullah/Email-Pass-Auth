import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>this is login page</h2>
            <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
        </div>
    );
};

export default Login;