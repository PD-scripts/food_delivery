import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    
    email: "",
    password: "",
  
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleEvent = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/loginuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      
        email: credentials.email,
        password: credentials.password,
      
      })
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleEvent}>
        

        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to="/createuser" className="m-3 btn btn-danger">
          Already a user
        </Link>
      </form>
    </div>
  );
};

export default Login;
