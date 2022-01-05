const persons = require('./data');

const resolvers = {
  Query: {
    getPersons: (parent, args, context, info) => {
      return persons;
    },
  },
  Mutation: {
    addPerson: (parent, { input }, context, info) => {
      const newPerson = { id: input.id, name: input.name, age: input.age };
      persons.push(newPerson);
      return newPerson;
    },
    deletePerson: (parent, { id }, context, info) => {
      const personIdx = persons.findIndex((person) => person.id == id);
      const deletedPerson = persons.splice(personIdx, 1);
      return deletedPerson[0];
    },
  },
};

module.exports = resolvers;
