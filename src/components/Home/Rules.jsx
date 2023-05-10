import Card from 'react-bootstrap/Card';

const Rules = () => {
    return (
        <div className='my-card'>
            <Card className=" card-header"style={{ width: '80rem', height: '100rem'  ,margin: '0 auto' }} >
                <Card.Header> Reglas del Juego  </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            <ul>
                                <li>Regla 1: Las piezas sólo se mueven en diagonal (es decir, sólo van a poder estar sobre casillas de fondo oscuro).</li>
                                <li>Regla 2: Los peones sólo pueden moverse a una posición adyacente y que sea una casilla libre, con la siguiente excepción:</li>
                                    <ul>
                                        <li>Si la casilla a la que se va a mover está ocupada por una pieza contraria, y puede "saltar" sobre ella (al saltar, siguiendo la misma dirección diagonal, encuentra una casilla libre)</li>
                                        <li>Entonces salta sobre la pieza, la cual desaparece del tablero (es una pieza "comida").</li>
                                    </ul>
                            </ul>
                            {' '}
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className=" card-header"style={{ width: '80rem', height: '100rem'  ,margin: '0 auto', borderRadius: ' 0' }} >
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            <ul>
                            <li>Regla 3: Si un peón negro alcanza la fila 7 o un peón blanco alcanza la fila 0, promociona a reina.</li>
                                <li>Regla 4: Una reina puede moverse diagonalmente mientras en ese movimiento diagonal recorra sólo casillas vacías.</li>
                                <li>Regla 5: Respecto a comer piezas una reina se comporta exactamente igual que un peón, salvo por el hecho de que puede comer en cualquier dirección</li>
                            </ul>
                            {' '}
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className=" card-header"style={{ width: '80rem', height: '90px'  ,margin: '0 auto', borderRadius: ' 0'}} >
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            <ul>
                                <li>Regla 6: El juego termina cuando un jugador se queda sin piezas o cuando ninguno de los dos jugadores puede realizar un movimiento.</li>
                            </ul>
                            {' '}
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Rules;
