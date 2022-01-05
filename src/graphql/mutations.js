import { gql } from '@apollo/client';

export const ADD_PERSON = gql`
  mutation addPerson($input: PersonInput) {
    addPerson(input: $input) {
      id
      name
      age
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation deletePerson($id: ID!) {
    deletePerson(id: $id) {
      id
      name
      age
    }
  }
`;
