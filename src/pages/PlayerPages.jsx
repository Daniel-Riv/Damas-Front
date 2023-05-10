import React from 'react'
import Board from '../components/Board/Board'
import { useParams } from 'react-router-dom';

const PlayerPages = () => {
    const {id} = useParams();
  return (
    <>
        <Board  />
    </>
  )
}

export default PlayerPages