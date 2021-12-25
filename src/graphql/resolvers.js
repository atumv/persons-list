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
    },
    deletePerson: (parent, { id }, context, info) => {
      const personIdx = persons.findIndex(person => person.id == id);
      if (personIdx === -1) throw new Error("Person not found.");
      const deletedPersons = persons.splice(personIdx, 1);
      return deletedPersons[0];
    }
  }
};

module.exports = resolvers;