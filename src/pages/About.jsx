import React from 'react'

export default function About() {
    return (
        <section id='about'
            style={{
                backgroundImage: "url('src/assets/Rectangleabout-bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className='relative flex   p-6 min-w-[100%] min-h-screen'>

            <section className='p-4 mt-auto mr-auto mb-24 flex flex-col ml-16 w-full md:w-[40%] '>
                <h1 className='text-6xl  text-[#232323] font-semibold ' style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} >About Us</h1>
                <p className='text-[#606060] mt-4  text-lg  '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>

                <button className='p-2 mt-4 w-[50%] bg-[#FF6400] px-8 py-2 hover:transform hover:translate-y-[-5px] transition-all duration-300 ease-in-out rounded-full text-white font-bold '>
                    LOREM
                </button>
            </section>


            <section className='w-[60%] flex flex-col p-4 items-center justify-center' >

                <img src="src\assets\2480559about-banner.png" alt="about" className='w-[60%] h-auto object-cover mt-auto mb-36' />
            </section>
        </section>
    )
}
