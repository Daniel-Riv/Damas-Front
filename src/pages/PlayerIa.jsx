import React from 'react'
import BoardIa from '../components/Board/BoardIa'
import ContainerR from '../components/Container/ContainerR'

const PlayerIa = () => {
  return (
    <>
      <ContainerR  title="Inteligencia Artifical vs Inteligencia Artifical" jugador1="Inteligencia Artifical 2" jugador2="Inteligencia Artifical 1"/>
      <div>
      <BoardIa />
      </div>
    </>
  )
}

export default PlayerIa