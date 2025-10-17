import React from 'react'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Branches from './Components/Home/Branches'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/branches" element={<Branches />} />
            </Routes>
      </Router>
    </>
  )
}

export default App