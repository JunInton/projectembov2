import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
