import React, { useState } from 'react'

export default function Contactus() {

    const [formData , setFormData] = useState({
        name : '',
        lastname : '',
        email : '',
        phone : '',
        budget : '',
        description : '',
    })

    const fields = [
        // name , lastname , email , phone , budget  , description
        {name : 'name' , type : 'text' , placeholder : 'name'  },
        {name : 'lastname' , type : 'text' , placeholder : 'lastname'  },
        {name : 'email' , type : 'email' , placeholder : 'email'  },
        {name : 'phone' , type : 'number' , placeholder : 'phone'  },
        {name : 'budget' , type : 'number' , placeholder : 'budget'  },
        {name : 'description' , type : 'text' , placeholder : 'description'  },

    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
  return (
    <section id='contact' className='relative flex flex-col items-center justify-center p-12 min-w-[100%] min-h-screen'>

                <h1 className='text-4xl ml-8  text-[#232323]   font-bold ' >Contact Us</h1>
                <small className='text-[#606060] w-full mt-4 md:w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa velit distinctio, iste recusandae quis sint, a impedit assumenda non, voluptatem ipsum dolorum veritatis dolorem ab. Asperiores incidunt velit assumenda quisquam.</small>
            <form onSubmit={handleSubmit} >

                <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 '>
                    {fields.map((field, index) => {
                        return (
                            <div key={index} className='flex flex-col py-4 '>
                                <input 
                                type={field.type} 
                                name={field.name} id={field.name} 
                                placeholder={field.placeholder} 
                                value={formData[field.name]}
                                onChange={(e) => setFormData({...formData , [e.target.name] : e.target.value})}
                                className='border-b-[1px] w-[80dvw] md:w-[300px] focus:outline-none border-b-[#606060] text-[#606060] p-2' />
                            </div>
                        )
                    })}
                </section>

                <button className='mt-8 bg-[#232323] text-white py-2 px-4 rounded-md hover:bg-[#606060] transition-all duration-300 ease-in-out' >Submit</button>
            </form>
    </section>
  )
}
