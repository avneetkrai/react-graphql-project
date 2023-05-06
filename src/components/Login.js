import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../api/useLogin';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({});
  const [signInFn, { loading, error, data }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem('token', data?.token?.token);
      navigate('/');
    },
  });
  const navigate = useNavigate();
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
    signInFn({
      variables: {
        userSignin: formData,
      },
    });
    console.log(formData);
  };

  if (loading) <div>Loading...</div>;
  // if (data) {
  //   localStorage.setItem('token', data?.token?.token);
  //   navigate('/');
  // }

  return (
    <div className="container my-container">
      {error && <div className="red card-panel">User does not exists!!</div>}
      <h5>Login!!</h5>
      <form onSubmit={handleSubmit}>
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

        <Link to="/signup">
          <p>Don't have Account?</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
