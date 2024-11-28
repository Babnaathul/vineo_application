import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation userLogin($payload: UserLoginDto!) {
    userLogin(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;
