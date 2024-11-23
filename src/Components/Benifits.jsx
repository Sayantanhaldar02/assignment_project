import React from 'react'

const Benifits = () => {
    return (
        <>
            <section className="bg-gray-100 py-10">
                <h1 className="text-3xl font-bold my-4 text-center">Achieve Your Goals With Edu School</h1>
                <div className="flex justify-center gap-4 py-20  px-20">
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-blue-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/8065/8065344.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">Expert Teachers</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-pink-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/3976/3976631.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">Quality Education</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-orange-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/17643/17643665.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">Life Time Support</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-green-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/1946/1946785.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">Best Scholarships</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Benifits