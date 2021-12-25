const { gql } = require("apollo-server");

const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    getPerson(id: ID!): Person!
    getPersons: [Person!]!
  }

  type Mutation {
    addPerson(id: ID!, name: String!, age: Int): Person!
  }
`;

module.exports = typeDefs;