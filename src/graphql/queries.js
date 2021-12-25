import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
  query getPersons {
    getPersons {
      id
      name
      age
    }
  }
`;
