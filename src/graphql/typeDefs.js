const { gql } = require('apollo-server');

const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
    age: Int!
  }

  input PersonInput {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    getPerson(id: ID!): Person!
    getPersons: [Person!]!
  }

  type Mutation {
    addPerson(input: PersonInput): Person!
    deletePerson(id: ID!): Person!
  }
`;

module.exports = typeDefs;
