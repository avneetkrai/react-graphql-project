import { useQuery } from '@apollo/client';
import React from 'react';
import { MY_PROFILE } from '../api/useMyProfile';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(MY_PROFILE);

  if (loading) <div>Loading...</div>;
  if (!localStorage.getItem('token')) {
    navigate('/login');
  }
  return (
    <div className="float-container">
      <div className="float-child-one card-panel">
        <img
          alt="homepage"
          className="imageStyles"
          src={`https://robohash.org/${data?.user.firstName}.png`}
        />
        <h5><strong>Name:</strong> {data?.user.firstName}</h5>
        <h5><strong>Email:</strong> {data?.user.email}</h5>
      </div>
      <div className="float-child-two card-panel">
        {' '}
        <h3>Your Quotes</h3>
        {data?.user.quotes.map((quote) => {
          return (
            <blockquote>
              <h6> {quote?.name}</h6>
            </blockquote>
          );
        })}
      </div>
    </div>
  );
}
