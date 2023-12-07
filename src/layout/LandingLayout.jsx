import React from 'react'

import LandingNavbar from '../components/LandingNavbar'
import LandingFooter from '../components/LandingFooter'
import Router from '../router/Router'

const LandingLayout = () =>
{
  return (
    <div className='flex flex-col min-h-screen '>
      <LandingNavbar />
      <Router />
      <LandingFooter />
    </div>
  )
}

export default LandingLayout