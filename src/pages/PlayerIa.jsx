import React, { useState } from 'react'
import BoardIa from '../components/Board/BoardIa'
import ContainerR from '../components/Container/ContainerR'
import { Form } from 'react-bootstrap';
import FormName from '../components/Container/FormName';

const PlayerIa = () => {

  const [names, setNames] = useState({ name1: 'Inteligencia Artifical 1', name2: 'Inteligencia Artifical 2' });

  const handleNameChange = (newNames) => {
    setNames(newNames);
  };


  return (
    <>
      <ContainerR title="Inteligencia Artifical vs Inteligencia Artifical" names={names} />
      <div>
        <BoardIa />
      </div>
    </>
  )
}

export default PlayerIa