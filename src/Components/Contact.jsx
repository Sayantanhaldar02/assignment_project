import React from 'react'
import contact_image from "../assets/contact.svg"
const Contact = () => {
    return (
        <>
            <section className="bg-white py-5">
                <h1 className="text-[40px] font-bold mb-4 text-center">Contact Us</h1>
                <div className='flex items-center justify-center gap-6 w-[80%] mx-auto py-24'>
                    <form className="flex flex-col space-y-4  w-[100%] border-2 p-10 shadow-lg rounded-lg">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 border border-gray-200 rounded-xl"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="p-2 border border-gray-200 rounded-xl"
                        />
                        <input
                            type="number"
                            placeholder="Contact Number"
                            className="p-2 border border-gray-200 rounded-xl"
                        />
                        <textarea
                            placeholder="Message"
                            className="p-2 border border-gray-200 rounded-xl"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-700 transition duration-300"
                        >
                            Send
                        </button>
                    </form>
                    <img src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148885963.jpg?t=st=1732372647~exp=1732376247~hmac=1a6b891cd2d6c2122d72d3e1d59af107c0d6e701a05c10bb205af60108609a95&w=740" alt="" className='w-[50%]' />
                </div>
            </section>
        </>
    )
}

export default Contact