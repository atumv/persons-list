import { gql } from "@apollo/client";

export const ADD_PERSON = gql`
  mutation addPerson($id: ID!, $name: String!, $age: Int) {
    addPerson(id: $id, name: $name, age: $age) {
      id
      name
      age
    }
  }
`;