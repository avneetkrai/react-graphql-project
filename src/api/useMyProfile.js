import { gql } from '@apollo/client';

export const MY_PROFILE = gql`
  query getUserProfile {
    user:myprofile {
      firstName
      lastName
      email
      quotes {
        name
      }
    }
  }
`;
