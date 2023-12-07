import React from 'react'
import { Link } from 'react-router-dom'
import cta_image from "../assets/offer-cta-right.jpg"

const Offer = () =>
{
  return (
    <>
      {/* What We Offer Section */}
      <section className='bg-white'>
        {/* Section Text */}
        <div className='container flex flex-col px-0 mx-auto lg:pt-32 mt-2 md:mt-4 gap-8'>
          <div className="flex flex-col space-y-6 md:space-y-10 my-8 md:my-12 items-center">
            <h2 className='max-w-lg text-3xl md:text-5xl font-semibold text-center'>What We Offer</h2>
            <p className="max-w-3xl text-center text-dark text-lg md:text-xl leading-6 font-Work-Sans font-normal px-4">
              A decentralized healthcare platform where you can control and manage your medical data with ease and complete privacy.</p>
          </div>
        </div>

        {/* Section Cards */}
        <div className='flex items-center justify-center gap-8 overflow-scroll'>
          {/* Card 1 */}
          <div className='flex justify-center items-center gap-7 shrink-0'>
            <div className='group flex flex-col items-center justify-center w-96 h-96 p-8 shrink-0 bg-secondary hover:bg-primary rounded-2xl gap-9'>
              <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" className='p-2 fill-black group-hover:fill-white'>
                <path d="M21.1667 67.0002H29.5V58.6668H37.8334V50.3335H29.5V42.0002H21.1667V50.3335H12.8334V58.6668H21.1667V67.0002ZM46.1667 52.4168H71.1667V46.1668H46.1667V52.4168ZM46.1667 64.9168H62.8334V58.6668H46.1667V64.9168ZM8.66671 83.6668C6.37504 83.6668 4.41393 82.8515 2.78337 81.221C1.15004 79.5877 0.333374 77.6252 0.333374 75.3335V29.5002C0.333374 27.2085 1.15004 25.246 2.78337 23.6127C4.41393 21.9821 6.37504 21.1668 8.66671 21.1668H29.5V8.66683C29.5 6.37516 30.3167 4.41266 31.95 2.77933C33.5806 1.14877 35.5417 0.333496 37.8334 0.333496H46.1667C48.4584 0.333496 50.4209 1.14877 52.0542 2.77933C53.6848 4.41266 54.5 6.37516 54.5 8.66683V21.1668H75.3334C77.625 21.1668 79.5875 21.9821 81.2209 23.6127C82.8514 25.246 83.6667 27.2085 83.6667 29.5002V75.3335C83.6667 77.6252 82.8514 79.5877 81.2209 81.221C79.5875 82.8515 77.625 83.6668 75.3334 83.6668H8.66671ZM8.66671 75.3335H75.3334V29.5002H54.5C54.5 31.7918 53.6848 33.7529 52.0542 35.3835C50.4209 37.0168 48.4584 37.8335 46.1667 37.8335H37.8334C35.5417 37.8335 33.5806 37.0168 31.95 35.3835C30.3167 33.7529 29.5 31.7918 29.5 29.5002H8.66671V75.3335ZM37.8334 29.5002H46.1667V8.66683H37.8334V29.5002Z" />
              </svg>
              <div className='text-center space-y-3 group-hover:text-white'>
                <p className="font-semibold text-md text-2xl">Seamless PHR Management</p>
                <p>You can manage, access, and securely store your personal health record (PHR) including your medical records, test results, treatment history, etc.</p>
                <Link to="/" className='group/link transition-all duration-300 ease-in-out flex items-center justify-center gap-1 text-primary group-hover:text-white '>
                  <p className='font-semibold bg-left-bottom bg-gradient-to-r from-white to-secondary bg-[length:0%_2px] bg-no-repeat group-hover/link:bg-[length:100%_2px] transition-all duration-500 ease-out'>Learn More</p>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='flex justify-center items-center gap-7 shrink-0'>
            <div className='group flex flex-col items-center justify-center w-96 h-96 p-8 shrink-0 bg-secondary hover:bg-primary rounded-2xl gap-9'>
              <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" className='p-2 fill-secondary group-hover:fill-primary stroke-black group-hover:stroke-white'>
                <path d="M37.9995 83C56.5494 76.6061 69.7721 61.7423 71.846 42.817C72.4215 34.6015 72.3728 26.3542 71.7003 18.146C71.6115 16.8522 71.0435 15.638 70.1073 14.7406C69.1712 13.8431 67.9341 13.3268 66.6377 13.2926C58.2458 13.0342 48.4919 11.6352 40.9554 4.21152C40.1678 3.4352 39.1064 3 38.0005 3C36.8946 3 35.8332 3.4352 35.0456 4.21152C27.507 11.6352 17.7531 13.0342 9.36328 13.2926C8.06689 13.3268 6.8298 13.8431 5.89365 14.7406C4.9575 15.638 4.38953 16.8522 4.30067 18.146C3.62745 26.3541 3.57808 34.6015 4.15297 42.817C6.22684 61.7423 19.4495 76.6061 37.9995 83Z" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.2424 47.8018C28.5358 47.8018 31.2056 45.132 31.2056 41.8386C31.2056 38.5453 28.5358 35.8755 25.2424 35.8755C21.9491 35.8755 19.2793 38.5453 19.2793 41.8386C19.2793 45.132 21.9491 47.8018 25.2424 47.8018Z" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M46.9124 36.9399C50.2057 36.9399 52.8755 34.2702 52.8755 30.9768C52.8755 27.6835 50.2057 25.0137 46.9124 25.0137C43.619 25.0137 40.9492 27.6835 40.9492 30.9768C40.9492 34.2702 43.619 36.9399 46.9124 36.9399Z" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M47.0046 58.6655C50.298 58.6655 52.9678 55.9957 52.9678 52.7024C52.9678 49.409 50.298 46.7393 47.0046 46.7393C43.7113 46.7393 41.0415 49.409 41.0415 52.7024C41.0415 55.9957 43.7113 58.6655 47.0046 58.6655Z" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.5698 44.5073L41.6592 50.0704M41.5874 33.6436L30.5698 39.1718" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className='text-center space-y-3 group-hover:text-white'>
                <p className="font-semibold text-md text-2xl">Data Sharing and Exchange</p>
                <p>You can selectively share your PHR with authorized healthcare providers, researchers, and third party entities based on your consent and preferences.</p>
                <Link to="/" className='group/link transition-all duration-300 ease-in-out flex items-center justify-center gap-1 text-primary group-hover:text-white '>
                  <p className='font-semibold bg-left-bottom bg-gradient-to-r from-white to-secondary bg-[length:0%_2px] bg-no-repeat group-hover/link:bg-[length:100%_2px] transition-all duration-500 ease-out'>Learn More</p>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='flex justify-center items-center gap-7 shrink-0'>
            <div className='group flex flex-col items-center justify-center w-96 h-96 p-8 shrink-0 bg-secondary hover:bg-primary rounded-2xl gap-8'>
              <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" className="p-2 fill-black group-hover:fill-white">
                <path d="M36.25 62.5H43.75V43.75H62.5V36.25H43.75V17.5H36.25V36.25H17.5V43.75H36.25V62.5ZM8.075 80C5.775 80 3.855 79.23 2.315 77.69C0.771666 76.1467 0 74.225 0 71.925V8.075C0 5.775 0.771666 3.855 2.315 2.315C3.855 0.771666 5.775 0 8.075 0H71.925C74.225 0 76.145 0.771666 77.685 2.315C79.2283 3.855 80 5.775 80 8.075V71.925C80 74.225 79.23 76.145 77.69 77.685C76.1467 79.2283 74.225 80 71.925 80H8.075ZM8.075 75H71.925C72.6917 75 73.3967 74.68 74.04 74.04C74.68 73.3967 75 72.6917 75 71.925V8.075C75 7.30833 74.68 6.60333 74.04 5.96C73.3967 5.32 72.6917 5 71.925 5H8.075C7.30833 5 6.60333 5.32 5.96 5.96C5.32 6.60333 5 7.30833 5 8.075V71.925C5 72.6917 5.32 73.3967 5.96 74.04C6.60333 74.68 7.30833 75 8.075 75Z" />
              </svg>
              <div className='text-center space-y-3 group-hover:text-white'>
                <p className="font-semibold text-md text-2xl">Secure Access for Healthcare Providers</p>
                <p>Healthcare professionals can securely access patients' personal health records (PHRs) including medical data, test results, treatment history, etc.</p>
                <Link to="/" className='group/link transition-all duration-300 ease-in-out flex items-center justify-center gap-1 text-primary group-hover:text-white '>
                  <p className='font-semibold bg-right-bottom bg-gradient-to-r from-white to-secondary bg-[length:0%_2px] bg-no-repeat group-hover/link:bg-[length:100%_2px] transition-all duration-500 ease-out'>Learn More</p>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className='flex justify-center items-center gap-7 shrink-0'>
            <div className='group flex flex-col items-center justify-center w-96 h-96 p-8 shrink-0 bg-secondary hover:bg-primary rounded-2xl gap-8 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" className="p-2 fill-black group-hover:fill-white">
                <path d="M32.7273 7.96364L58.1818 19.2727V36.3636C58.1818 52.8 47.3455 67.9636 32.7273 72.4727C18.1091 67.9636 7.27273 52.8 7.27273 36.3636V19.2727L32.7273 7.96364ZM32.7273 0L0 14.5455V36.3636C0 56.5455 13.9636 75.4182 32.7273 80C51.4909 75.4182 65.4545 56.5455 65.4545 36.3636V14.5455L32.7273 0ZM29.0909 21.8182H36.3636V29.0909H29.0909V21.8182ZM29.0909 36.3636H36.3636V58.1818H29.0909V36.3636Z" />
              </svg>
              <div className='text-center space-y-3 group-hover:text-white'>
                <p className="font-semibold text-md text-2xl">Data and Privacy Protection</p>
                <p>Our comprehensive data governance policies and procedures ensure superior data accuracy, integrity, and compliance with data privacy regulations.</p>
                <Link to="/" className='group/link transition-all duration-300 ease-in-out flex items-center justify-center gap-1 text-primary group-hover:text-white '>
                  <p className='font-semibold bg-right-bottom bg-gradient-to-r from-white to-secondary bg-[length:0%_2px] bg-no-repeat group-hover/link:bg-[length:100%_2px] transition-all duration-500 ease-out'>Learn More</p>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Cards */}

        {/* CTA*/}
        <div className='flex items-center justify-center md:justify-between mt-12 p-6 bg-purple-50 w-full'>
          {/* Left CTA Text */}
          <div className='flex flex-col items-center md:items-start justify-center gap-6 py-8 pl-8 max-w-lg md:max-w-sm h-full text-center md:text-left'>
            <div className='flex flex-col-reverse md:flex-col gap-4 justify-center items-center md:items-start'>
              <p className="w-48 md:w-24 h-[0.35rem] rounded-md bg-primary"></p>
              <h3 className='text-4xl md:text-5xl font-bold leading-[1.15]'>Your Health Record, <br />Your Rules</h3>
            </div>
            
            <p className='text-lg'>Create your personal health record today and access your data anywhere with ease and privacy.
            </p>
            <button type="button" className='bg-primary text-white px-9 py-3.5 rounded-md font-medium  hover:bg-secondary hover:text-dark hover:shadow-lg'><a href="#">Secure Your Data</a></button>
          </div>

          {/* Right CTA Image */}
          <div className='w-1/2 hidden md:block'>
            <img src={cta_image} alt="Afya Signup CTA" className='w-full object-cover' />
          </div>
        </div>
        {/* End CTA */}

        {/* Newsletter */}
        <div className='flex flex-col items-center justify-center p-6 md:p-16 gap-12 bg-primary rounded-t-lg'>
          <h3 className='text-4xl md:text-5xl text-white font-bold leading-[1.15] text-center'>Join Our Newsletter</h3>
          <div className='flex items-center justify-between md:gap-12 bg-[#F9F1FE] rounded-md'>
            <input type="email" name="email" id="email" placeholder='Enter your email' className='bg-transparent md:p-4 ml-2 rounded-md border-none' />
            <button type="button" className='bg-primary text-white px-1.5 md:px-6 py-2 md:py-3.5 m-1 md:m-2 rounded-md font-medium border-2 hover:bg-secondary hover:text-dark hover:shadow-lg  hover:border-primary'><a href="#">Subscribe</a></button>
          </div>
        </div>
      </section>
      {/* End Section */}
    </>
  )
}

export default Offer