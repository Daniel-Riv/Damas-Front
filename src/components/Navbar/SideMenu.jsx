import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineMenu } from 'react-icons/ai';
import './sidemenu.css'
import ListCard from './ListCard';

const SideMenu = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='aicon'>
        <AiOutlineMenu  onClick={handleShow} />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>OPCIONES DE JUEGO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListCard/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideMenu;
