const persons = require('./data');

const resolvers = {
  Query: {
    getPersons: (parent, args, context, info) => {
      return persons;
    },
  },
  Mutation: {
    addPerson: (parent, { id, name, age }, context, info) => {
      const person = { id, name, age };
      persons.push(person);
      return person;
    },
    deletePerson: (parent, { id }, context, info) => {
      const personIdx = persons.findIndex((person) => person.id == id);
      const deletedPerson = persons.splice(personIdx, 1);
      return deletedPerson[0];
    },
  },
};

module.exports = resolvers;
