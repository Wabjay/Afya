import React from 'react'

const Hero = () =>
{
  return (
    <>
      {/* Hero Section */}
      <section className='relative bg-footer-bg bg-zinc-500 py-12 bg-no-repeat bg-top bg-cover bg-clip-border gap-16'>
        <div className='container flex flex-col px-6 mx-auto mt-2 md:mt-4 space-y-0 md:space-y-0 md:space-x-10'>
          {/* Hero Text */}
          <div className="flex flex-col space-y-6 md:space-y-10 md:my-16 items-center">
            {/* Hero Title */}
            <h1 className='max-w-md md:max-w-lg text-5xl md:text-6xl font-bold text-center text-white font-Work-Sans'>Take Total Control Of Your Medical Records</h1>
            {/* Hero Subtitle */}
            <p className="max-w-3xl text-center text-white text-xl leading-6 font-Work-Sans font-medium">
              Empowering individuals to take control of their health and wellbeing.</p>
            {/* CTA button */}
            <div className="flex justify-center">
              <button type="button" className='bg-primary text-white px-9 py-3.5 lg:mb-20 rounded-md font-medium  hover:bg-secondary hover:text-dark hover:shadow-lg'><a href="#">Join Us</a></button>
            </div>
          </div>
        </div>

        <div className='hidden lg:flex justify-center items-center gap-7 absolute -bottom-28 w-full mx-auto h-52'>
          <div className="w-[18rem] bg-white flex flex-col py-9 px-6 items-start gap-5 shadow-accentued shrink-0">
            <h3 className='font-bold leading-6 '>Manage Your Health Records</h3>
            <p className="w-12 h-[0.125rem] bg-dark"></p>
            <p>Take control of your medical data with our decentralized health record solution.</p>
          </div>
          <div className="w-[18rem] bg-white flex flex-col py-9 px-6 items-start gap-5 shadow-accentued shrink-0">
            <h3 className='font-bold leading-6 '>Share Medical Data Securely</h3>
            <p className="w-12 h-[0.125rem] bg-dark"></p>
            <p>With Afya, you decide who to share your medical data with, and where.</p>
          </div>
          <div className="w-[18rem] bg-white flex flex-col py-9 px-6 items-start gap-5 shadow-accentued shrink-0">
            <h3 className='font-bold leading-6 '> Access For Health Providers</h3>
            <p className="w-12 h-[0.125rem] bg-dark"></p>
            <p>Allow healthcare providers to
              access  your medical data in real-time.</p>
          </div> 
        </div>
      </section>
    </>
  )
}

export default Hero