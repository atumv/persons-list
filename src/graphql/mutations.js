import { gql } from '@apollo/client';

export const ADD_PERSON = gql`
  mutation addPerson($id: ID!, $name: String!, $age: Int) {
    addPerson(id: $id, name: $name, age: $age) {
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
