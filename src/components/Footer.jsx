import React from 'react'

export default function Footer() {
    return (

        <footer className='bg-[#E7F1F2] absolute bottom-0 left-0 right-0 flex p-6 w-full z-10'>
            <section className='grid grid-cols-1 p-16 md:grid-cols-2 gap-2 mt-4 mx-auto' >
                <span className='flex flex-col items-center justify-center space-x-2 p-6'>
                    <h1 className='text-2xl text-[#232323] font-bold' > Tagline will go here</h1>
                    <a href='mailto:user@gmail' className='flex items-center mt-4 space-x-2 text-[#00D5F8]' > User@gmail</a>
                </span>
                <span className='grid border-l-[1px] border-[#606060] grid-cols-1 md:grid-cols-2 gap-2 '>
                    <span className='flex flex-col justify-center items-center space-x-2 p-6'>
                        <h2 className='text-sm'> Address</h2>
                        <p className='text-[#606060] mt-2 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                    </span>

                    <span className=' flex flex-col justify-center items-center space-x-2 p-6'>
                        <h2 className='text-sm'> Contacts</h2>
                        <a href='mailto:user@gmail' className='flex mt-2 text-xs items-center space-x-2 text-[#606060]' > User@gmail</a>
                        <a href='tel:1234567890' className='flex text-xs items-center space-x-2 text-[#606060]' > 1234567890</a>

                    </span>

                </span>
            </section>
        </footer>
    )
}
