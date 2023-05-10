import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './sidemenu.css'
import { Navigate, useNavigate } from 'react-router-dom';


const ItemCard = ({item}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('ingreso ')
        navigate(`/player/${item.ruta}`)
    }

  return (
    <>
    <Card className='card'>
      <Card.Img bsPrefix='card-img' src={item.img} />
      <Card.Body>
        <Button bsPrefix='btn-primary' size="lg" onClick={handleClick} >{item.name}</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemCard