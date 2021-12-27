import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PERSONS } from './graphql/queries';
import { ADD_PERSON, DELETE_PERSON } from './graphql/mutations';
import Spinner from './components/Spinner';
import ErrorMsg from './components/ErrorMsg';
import Header from './components/Header';
import PersonsList from './components/PersonsList';
import Form from './components/Form';
import './styles/style.css';

const App = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const inputs = [nameInputRef, ageInputRef];

  const mutationOptions = { refetchQueries: [GET_PERSONS, 'getPersons'] };

  const { loading, error, data } = useQuery(GET_PERSONS);
  const [addNewPerson] = useMutation(ADD_PERSON, mutationOptions);
  const [deletePerson] = useMutation(DELETE_PERSON, mutationOptions);

  const addPerson = (e) => {
    e.preventDefault();
    addNewPerson({
      variables: {
        id: Date.now(),
        name: nameInputRef.current.value,
        age: +ageInputRef.current.value,
      },
    });
    inputs.forEach((input) => (input.current.value = ''));
    nameInputRef.current.focus();
  };

  const removePerson = (e) => {
    deletePerson({ variables: { id: e.target.parentNode.id } });
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMsg />;

  return (
    <div className="app">
      <Header />
      <PersonsList data={data} removePerson={removePerson} />
      <Form
        onSubmit={addPerson}
        nameInputRef={nameInputRef}
        ageInputRef={ageInputRef}
      />
    </div>
  );
};

export default App;
