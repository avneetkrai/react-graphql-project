import { gql } from '@apollo/client';

export const CREATE_QUOTE = gql`
mutation createQuote($name: String!) {
    quotes: createQuote(name: $name) 
   }
`;
