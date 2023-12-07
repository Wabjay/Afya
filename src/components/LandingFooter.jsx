import React, { useState } from 'react'
// import Logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

const LandingFooter = () =>
{
  return (
    <footer className='bg-dark'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-8 md:space-y-0 p-6 md:p-16'>
        {/* Company Legal */}
        <div className='flex justify-between w-5/6 md:w-1/2 gap-8'>
          <div className="flex flex-col text-white gap-6">
            <h3 className='font-bold text-lg'>Company</h3>
            <div className="flex flex-col gap-2">
              <Link to="#">About Us</Link>
              <Link to="#">FAQs</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Contact</Link>
              <Link to="#">Careers</Link>
            </div>
          </div>

          <div className="flex flex-col text-white gap-6">
            <h3 className='font-bold text-lg'>Legal</h3>
            <div className="flex flex-col gap-2">
              <Link to="#">Terms of Use</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Legal Notice</Link>
              <Link to="#">Do Not Share My Info</Link>
              <Link to="#">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-items-start md:self-auto text-white gap-6">
          <h3 className='font-bold text-lg'>Get In Touch</h3>
          <div className="flex flex-col gap-6">
            <div className='flex items-center justify-start gap-2  text-2xl'>
              <ion-icon name="call-outline"></ion-icon>
              {/* Will be a link to Google Mapslater */}
              <Link to="/" className='text-base'>+234 (0) 810 245 6564</Link>
            </div>
            <div className='flex items-center justify-start gap-2  text-2xl'>
              <ion-icon name="location-outline"></ion-icon>
              <Link to="/" className='text-base'>Marina, Lagos, NG</Link>
            </div>
            <div className='flex items-center gap-2 text-2xl'>
              <ion-icon name="mail-outline"></ion-icon>
              <Link to="/" className='text-base'>hello@afya.io</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:justify-between bg-slate-100 px-6 py-2'>
        <p>&copy; 2023 Afya Inc. All rights reserved.</p>
        <p>Made with &#10084; in NG</p>
      </div>
    </footer>
  )
}
export default LandingFooter