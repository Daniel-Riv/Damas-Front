import React, { useEffect } from 'react'
import Rules from '../components/Home/Rules';
import { Accordion, Card, Button } from 'react-bootstrap';
import Authors from '../components/Home/Authors';


const HomePages = () => {
    return (
        <>
            <Rules/>
            <Authors />
        </>
    )
}

export default HomePages