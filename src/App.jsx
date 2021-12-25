import React, { useRef } from 'react';

import Spinner from './components/Spinner';
import ErrorMsg from './components/ErrorMsg';
import Header from './components/Header';
import PersonsList from './components/PersonsList';
import Form from './components/Form';

import { useQuery, useMutation } from '@apollo/client';
import { GET_PERSONS } from './graphql/queries';
import { ADD_PERSON } from './graphql/mutations';

import './styles/style.css';

const App = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const { loading, error, data } = useQuery(GET_PERSONS);
  const [addNewPerson, { data: personData }] = useMutation(ADD_PERSON, {
    refetchQueries: [GET_PERSONS, 'getPersons'],
  });

  const addPerson = (e) => {
    e.preventDefault();
    addNewPerson({
      variables: {
        id: Date.now(),
        name: nameInputRef.current.value,
        age: +ageInputRef.current.value,
      },
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const returnFocusToName = () => {
    nameInputRef.current.focus();
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMsg />;

  return (
    <div className="app">
      <Header />
      {!loading && <PersonsList data={data} />}
      <Form
        onSubmit={addPerson}
        nameInputRef={nameInputRef}
        ageInputRef={ageInputRef}
        returnFocusToName={returnFocusToName}
      />
    </div>
  );
};

export default App;
