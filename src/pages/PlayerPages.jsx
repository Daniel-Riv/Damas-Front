import React, { useState } from 'react'
import Board from '../components/Board/Board'
import { useParams } from 'react-router-dom';
import ContainerR from '../components/Container/ContainerR';
import FormName1 from '../components/Container/FormName1';

const PlayerPages = () => {
  const { id } = useParams();

  const [names, setNames] = useState({name1: 'Default Name 1', name2: 'Inteligencia Artifical'});

  const handleNameChange = (newNames) => {
      setNames(newNames);
  };

  return (
    <>
      <FormName1 onNameChange={handleNameChange} />
      <ContainerR title="Jugador vs Inteligencia Artifical" names={names}/>

      <div>
        <Board />
      </div>
    </>
  )
}

export default PlayerPages