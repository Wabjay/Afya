import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className=''>
        <div className='container flex flex-col-reverse md:flex-row px-6 mx-auto mt-2 md:mt-4 space-y-0 md:space-y-0 md:space-x-10'>
          {/* Hero Text */}
          <div className="flex flex-col space-y-6 md:space-y-10 md:my-16 md:w-1/2 items-center md:items-start md:pr-6">
            <p className='text-2xl hidden md:block text-neutral-400 -mb-6 font-Quicksand'>Job hunting?</p>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left font-Poppins'>Your Resume, Perfected</h1>
            <p className="max-w-sm text-center text-neutral-600 md:text-left md:text-lg leading-6 font-Quicksand font-medium">
              Transform your unique skills, experiences, and personality into a remarkable resume. Resumely makes crafting your resume fast and easy!
            </p>
            <div className="flex justify-center md:justify-start">
              <button type="button" className='bg-accent text-white px-4 py-2.5 mr-2 rounded-full font-medium  hover:bg-secondary hover:shadow-lg'><a href="#">Get Started</a></button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2 lg:w-4/6 flex flex-col items-center">
            <img className="w-[48rem] md:my-auto" src={hero} alt="Resumely Hero Image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero