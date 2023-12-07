import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingHome from '../pages/LandingHome'

const Routers = () =>
{
  return (
    <Routes>
      <Route path='/' element={<LandingHome />} />
    </Routes>
  )
}

export default Routers