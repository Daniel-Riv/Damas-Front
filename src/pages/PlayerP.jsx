import React from 'react'
import BoardPlayer from '../components/Board/BoardPlayer'
import ContainerR from '../components/Container/ContainerR'

const PlayerP = () => {
  return (
    <>
      <ContainerR title="Jugador vs Jugador" jugador1="Jugador 2" jugador2="Jugador 1" />
      <div>
        <BoardPlayer />
      </div>
    </>
  )
}

export default PlayerP