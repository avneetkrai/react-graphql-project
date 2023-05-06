import { gql } from "@apollo/client";

export const SIGNUP_USER = gql `
mutation createUser($input: UserInput!) {
 user: signupUser( input: $input) {
    firstName
    lastName
  }
}

`