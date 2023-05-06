import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_QUOTE } from '../api/useCreateQuote';
import { GET_ALL_QUOTES } from '../api/getAllQuotes';

function CreateQuote() {
  const [quote, setQuote] = useState('');
  const [createQuote, { loading, data, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [GET_ALL_QUOTES, 'getAllQuotes'],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
    createQuote({
      variables: {
        name: quote,
      },
    });
  };
  if (loading) <div>Loading...</div>;

  return (
    <div className="container card-panel">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && <div className="green card-panel">{data?.quotes}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your quote"
          value={quote}
          required
          onChange={(e) => setQuote(e.target.value)}
        ></input>
        <button className="btn #673ab7 deep-purple" type="submit">
          {' '}
          Create Quote{' '}
        </button>
      </form>
    </div>
  );
}

export default CreateQuote;
