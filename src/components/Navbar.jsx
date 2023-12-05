import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () =>
{
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full bg-white'>
      <nav className='container flex items-center py-4 shadow-md md:shadow-sm'>
        <div className="w-32 h-auto px-2 py-1.5 font-bold rounded-md hover:bg-gray-100">
          <Link to="/"><img src={Logo} alt="Afya - Decentralized Medical Data Platform" /></Link>
        </div>
        <ul className="hidden sm:flex flex-1 justify-center items-center gap-8 uppercase font-medium tracking-wider text-dark">
          <li className='cursor-pointer text-primary border-b-2 border-primary hover:text-accent'><a href="#">Home</a></li>
          <li className='cursor-pointer hover:text-accent'><a href="#">Product</a></li>
          <li className='cursor-pointer hover:text-accent'><a href="#">Contact</a></li>
          <li className='cursor-pointer hover:text-accent'><a href="#">Login</a></li>
        </ul>

        <button type="button" className='bg-primary text-white flex items-center gap-x-2 px-6 py-4 mr-2 rounded-lg font-medium uppercase hover:bg-secondary hover:shadow-lg'>
          <Link to="/" className='text-base font-bold leading-4'>Join Us</Link><ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>

        {/* Hamburger Icon */}
        <div id='menu-btn' className="flex sm:hidden flex-1 justify-end pr-2">
          <i className="fas fa-bars p-3 rounded-md hover:cursor-pointer hover:bg-primary hover:text-white transition-all relative" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}></i>
        </div>
        {/* Hamburger Menu */}
        <div id={isHamburgerOpen ? "openHamburger" : "closedHamburger"} className="sm:hidden">
          <div id="ham-menu" className="absolute flex flex-col items-center self-end py-4 mt-9 text-xl font-semibold bg-white sm:w-auto sm:self-center left-12 right-12 drop-shadow-lg transition-all divide-y z-10">
            <a href="#" className='text-center w-full py-3 hover:bg-blue-50 text-primary hover:text-accent'>Resume</a>
            <a href="#" className='text-center w-full py-3 hover:bg-blue-50 text-primary hover:text-accent'>Pricing</a>
            <a href="#" className='text-center w-full py-3 hover:bg-blue-50 text-primary hover:text-accent'>About</a>
            <a href="#" className='text-center w-full py-3 hover:bg-blue-50 text-primary hover:text-accent'>Contact</a>
            <Link to='/login' className='text-center w-full py-3 hover:bg-blue-50 text-primary hover:text-accent'>Login</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar