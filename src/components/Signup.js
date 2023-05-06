import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGNUP_USER } from '../api/useSignupUser';

function Signup() {
  const [formData, setFormData] = useState({});
  const [signupUser, { data, error, loading }] = useMutation(SIGNUP_USER);
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser({
      variables: {
        input: formData,
      },
    });
  };
  if (loading) <div>Loading...</div>;
  return (
    <div className="container my-container">
      {error && (
        <div className="red card-panel">
          User already exixts with same email id!!
        </div>
      )}
      {data?.user && (
        <div className="green card-panel">
          User {data?.user.firstName} registered Succeffuly!! Login to
          Conitnue...
        </div>
      )}
      <h5>Sign Up!!</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          //value={email}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          //value={email}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          //value={email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          //value={password}
          onChange={handleChange}
        ></input>
        <Link to="/login">
          <p>Don't have Account? Login Here</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
