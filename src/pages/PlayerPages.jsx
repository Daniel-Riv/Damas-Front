import React from 'react'
import Board from '../components/Board/Board'
import { useParams } from 'react-router-dom';
import ContainerR from '../components/Container/ContainerR';

const PlayerPages = () => {
  const { id } = useParams();
  return (
    <>
      <ContainerR title="Jugador vs Inteligencia Artifical" jugador1="Inteligencia Artifical 2" jugador2="Jugador" />

      <div>
        <Board />
      </div>
    </>
  )
}

export default PlayerPages