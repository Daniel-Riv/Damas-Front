import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePages from '../pages/HomePages'
import PlayerPages from '../pages/PlayerPages'
import SideMenu from '../components/Navbar/SideMenu'
import PlayerP from '../pages/PlayerP'
import PlayerIa from '../pages/PlayerIa'

const AppRouter = () => {
  return (
    <BrowserRouter>
       <SideMenu  />
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="/player/board1" element={<PlayerPages/>}/>
            <Route path="/player/board2" element ={<PlayerP/>}/>
            <Route path="/player/board3"  element ={<PlayerIa/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter