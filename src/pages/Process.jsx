import React from 'react'

export default function Process() {

    const process = [
        { name: 'Step 1 ', description: 'Lorem ipsum dolor sit amet, Ut enim ad minim veniam' },
        { name: 'Step 2', description: 'Lorem ipsum dolor sit amet, Ut enim ad minim veniam' },
        { name: 'step 3', description: 'Lorem ipsum dolor sit amet, Ut enim ad minim veniam' },
    ]
    return (
        <section id='services' className='relative flex flex-col p-6 min-w-[100%]'>
            <h1 className='text-4xl ml-8  text-[#232323]  font-bold ' >Our Processes</h1>
            <div className='p-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {process.map((item, index) => {
                    return (
                        <div key={index} className="spinner-container">
                            <div className="big-spinner">
                                <div className="small-spinner"> </div>
                            </div>
                            <div className="content">
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
