const persons = require("./data");

const resolvers = {
  Query: {
    getPerson: (parent, { id }, context, info) => {
      return persons.find(person => person.id === id);
    },
    getPersons: (parent, args, context, info) => {
      return persons;
    }
  },
  Mutation: {
    addPerson: (parent, { id, name, age }, context, info) => {
      const person = { id, name, age };
      persons.push(person);
      return person;
    }
  }
};

module.exports = resolvers;