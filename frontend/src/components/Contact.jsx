import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='items-center justify-center flex p-6'>
                <Link to="/" className=' px-5 py-2 bg-pink-400 hover:bg-pink-600 duration-200 hover:text-white  cursor-pointer rounded-full'>Back</Link>
            </div>
            <div className='flex h-screen items-center justify-center '>
                <div className="w-[600px]">
                    <div className="modal-box  border-[2px]  bg-transparent shadow-md p-5 rounded-3xl">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">

                            <h3 className="font-bold text-lg">Contact Us</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your Good Name' className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("text", { required: true })} />
                                <br />
                                {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <p className='mt-4 space-y-2'>
                                <span>Message</span>
                                <br />
                                <input type="message"
                                    placeholder='Enter your openion' className='w-80 h-72 px-3 border rounded-md outline-none'
                                    {...register("message", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </p>
                            <div className='flex justify-around mt-4'>
                                <button className='px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700 duration-200'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact