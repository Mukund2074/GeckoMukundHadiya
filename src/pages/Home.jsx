import React from 'react'

export default function Home() {
    return (
        <main
            className='relative flex flex-col p-8 justify-center min-w-[100%] min-h-screen'
            style={{ backgroundImage: "url('src/assets/_Layer_.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
        >

            <section className='p-4 mt-16 mr-auto ml-4 w-full md:w-[40%]'>
                <h1 className='text-4xl md:text-6xl text-[#232323] font-bold' style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                    How Much <br /> Could You Save?
                </h1>
                <p className='text-base md:text-lg text-[#232323]'>
                    Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.
                </p>
            </section>

            <span className='p-8 rounded-xl shadow-lg mr-auto md:ml-16 w-full flex flex-col items-center justify-center md:w-[50%] bg-white'>
                <h3 className='text-xl md:text-2xl text-[#232323] text-center w-[70%] md:w-[60%]' style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                    Is your turnover expected to be more than £85k?
                </h3>

                <span className='flex items-center mt-6 space-x-6 md:space-x-10'>
                    <button className='p-2 bg-[#FF6400] px-6 md:px-8 py-2 hover:transform hover:translate-y-[-5px] transition-all duration-300 ease-in-out rounded-full text-white font-bold'>
                        Yes
                    </button>
                    <button className='p-2 bg-[#FF6400] px-6 md:px-8 py-2 hover:transform hover:translate-y-[-5px] transition-all duration-300 ease-in-out rounded-full text-white font-bold'>
                        No
                    </button>
                </span>
                
            </span>
            <p className='text-[#232323] mt-2 mr-auto ml-20 w-full md:w-[40%] text-sm md:text-base'>
                Takes less than 30 seconds
            </p>

        </main>
    )
}
