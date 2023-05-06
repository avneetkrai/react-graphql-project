import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_QUOTES } from '../api/getAllQuotes';

function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  console.log('dataaaa', data);
  //   useEffect(() => {
  //     fetch('http://localhost:4000/', {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         query: `query getAllQuotes {
  //             quotes {
  //               name
  //               by{
  //                 firstName
  //                 _id
  //               }
  //             }
  //           }`,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  if (loading) <div>Loading...</div>;
  if (error) console.log(error.message);
  if(data?.quotes.length === 0) <div>No Quotes Available</div>
  if (!loading) {
    return (
      <div className="container">
        <h3>All Quotes</h3>
        {data?.quotes.map((quote) => (
          <blockquote>
            <h6 className='left-align'>{quote.name}</h6>
            <p className="right-align"> ~{quote.by.firstName}</p>
          </blockquote>
        ))}
      </div>
    );
  }
}

export default Home;
