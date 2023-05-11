import React, { useState } from 'react'
import BoardPlayer from '../components/Board/BoardPlayer'
import ContainerR from '../components/Container/ContainerR'
import FormName from '../components/Container/FormName'

const PlayerP = () => {

  const [names, setNames] = useState({name1: 'Default Name 1', name2: 'Default Name 2'});

  const handleNameChange = (newNames) => {
      setNames(newNames);
  };

  return (
    <>
      <FormName onNameChange={handleNameChange} />
      <ContainerR title="Jugador vs Jugador" names={names} />
      <div>
        <BoardPlayer />
      </div>
    </>
  )
}

export default PlayerP