import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation signInUser($userSignin: UserSigninInput!) {
    token: signinUser(userSignin: $userSignin) {
      token
    }
  }
`;
