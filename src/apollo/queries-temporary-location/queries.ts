import { gql } from "@apollo/client";

export const QUERY_ADD_USER = gql`
mutation AddUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    _id
    email
  }
}
`;

export const QUERY_GET_USER = gql`
query GetUser($getUserId: ID!) {
  getUser(id: $getUserId) {
    _id
    email
  }
}
`