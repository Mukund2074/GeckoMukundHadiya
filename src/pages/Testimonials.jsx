import React from 'react'

export default function Testimonials() {

    const cards = [
        { name: 'user 1', image: 'src/assets/image.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { name: 'user 2', image: 'src/assets/image.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
    ]

    const blogs = [
        { title: 'Acoount Management Tips', image: 'src/assets/blog1.png', date: 'May 13,2023', by: 'Mukund Hadiya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { title: 'Product Management Tips', image: 'src/assets/blog2.png', date: 'May 13,2019', by: 'user 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },
        { title: 'Marketing Management Tips', image: 'src/assets/blog3.png', date: 'May 13,2024', by: 'Mark Zuckerberg ', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' },

    ]
    return (
        <section id='services'
            style={{
                backgroundImage: "url('src/assets/Rectangletestimonial-bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className='relative flex flex-col p-14 min-w-[100%] min-h-screen'
        >
            <h1 className='text-4xl ml-8  text-[#232323]  font-bold ' >Testimonials</h1>

            <section className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-8'>

                {cards.map((card, index) => {
                    return (
                        <div key={index} className='relative flex flex-col space-x-4 mt-4 ml-8 bg-white rounded-md p-8 shadow-lg ' >
                            <img src={'src/assets/quate.png'} alt="service" className='w-14 h-auto absolute top-[-20px] rotate-180 left-2' />
                            <img src={'src/assets/quate.png'} alt="service" className='w-14 h-auto absolute bottom-[-20px] right-2' />
                            <span className='flex w-full items-center gap-4'>
                                <img src={card.image} alt="service" className='w-14 h-auto' />
                                <h2 className='text-xl font-semibold ' >{card.name}</h2>
                            </span>
                            <p className='text-sm text-[#606060] mt-4' >{card.description}</p>
                        </div>
                    )
                })}

            </section>

            <span className='flex  mt-16 items-center gap-4 w-full'>
                <h1 className='text-4xl ml-8  text-[#232323]   font-bold ' >Blogs</h1>
                <p className='text-sm font-semibold text-[#3D5FDD] ml-auto'> View All  {`->`}</p>
            </span>


            <section className='grid grid-cols-1 md:grid-cols-3 mt-16 gap-8'>

                {blogs.map((blog, index) => {
                    return (
                        <div key={index} className='relative flex flex-col space-x-4 mt-4 ml-8  rounded-md  ' >
                            <img src={blog.image} alt="service" className='w-full h-auto' />
                            <span className='flex w-full items-center gap-4'>
                                <p className='text-sm text-[#606060] mt-4' >{blog.date}</p>
                                <p className='text-sm text-[#D0021B] mt-4' >{blog.by}</p>
                            </span>
                            <span className='flex w-full items-center mt-4 gap-4'>
                                <h2 className='text-xl font-semibold ' >{blog.title}</h2>
                            </span>
                            <p className='text-sm text-[#606060] mt-4' >{blog.description}</p>
                        </div>)
                })}
            </section>

        </section>
    )
}
