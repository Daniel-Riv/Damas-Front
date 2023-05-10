import React from 'react'
import ItemCard from './ItemCard'

const datos =[
    {
        id: 1,
        name: 'Jugador vs Jugador',
        img: '../img/player.jpg',
        ruta: 'board2'
    },{
        id: 2,
        name: 'Jugador vs IA',
        img: '../img/iavspalyer.jpg',
        ruta: 'board1'
    },{
        id: 3,
        name: 'IA vs IA',
        img: '../img/ia.jpg',
        ruta: 'board3'
    }
]

const ListCard = ({id}) => {
  return (
    <div className='cards'>
        {
            datos.map((item) => <ItemCard key={item.id} item={item} /> )
        }
    </div>
  )
}

export default ListCard