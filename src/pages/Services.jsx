import React from 'react'

export default function Services() {

    const services = [
        {name: 'Audit & Account ' , image: '/src/assets/002-searchservice1.png' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {name : 'Budget & Projections' , image :'/src/assets/budget.png' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {name : 'Payroll & Bookkeeping' , image :'/src/assets/003-revenueservice3.png' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {name : 'Software Training & IT' , image :'/src/assets/004-settingservice4.png' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {name : 'Tax Planning & returns' , image :'/src/assets/Shape.png' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
        {name : 'Management Information' , image :'/src/assets/budget.png' , description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    ]
  return (
    <section id='services' className='relative flex flex-col p-6 min-w-[100%] min-h-screen'>
        <h1 className='text-4xl ml-8  text-[#232323]  font-bold ' >Services</h1>
      <div className='p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {services.map((service, index) => {
            return(
                <div key={index} className='flex flex-col hover:transform hover:translate-y-[-5px] transition-all duration-300 ease-in-out hover:bg-[#e9e8e7] hover:shadow-lg  border-[1px] p-4 rounded-md items-center justify-center space-x-4 mt-4 ml-8 ' >
                    <img src={service.image} alt="service" className='w-24 h-auto' />
                    <div className=' mt-4 flex flex-col items-center justify-center ' >
                        <h2 className='text-xl    font-bold ' >{service.name}</h2>
                        <p className=' mt-4 text-[#606060] text-center text-sm ' >{service.description}</p>
                    </div>
                </div>
            )
        })}

      </div>
    </section>
  )
}
