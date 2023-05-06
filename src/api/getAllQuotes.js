import { gql } from 'apollo-server-core';

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      name
      by {
        firstName
        _id
      }
    }
  }
`;
