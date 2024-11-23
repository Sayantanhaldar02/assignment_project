import React from 'react'

const Statistics = () => {
    return (
        <>
            <section className="bg-gray-100 py-10">
                <h1 className="text-3xl font-bold my-4 text-center">We are Proud to Share with You</h1>
                <div className="flex justify-center gap-4 py-20  px-20">
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-blue-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/10156/10156019.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">36,076</h2>
                        <p className="text-center font-semibold">
                            Students Enrolled
                        </p>
                    </div>
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-pink-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/3352/3352667.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">3,630</h2>
                        <p className="text-center font-semibold">
                            Total Courses 
                        </p>
                    </div>
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-pink-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/2940/2940653.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">2,500</h2>
                        <p className="text-center font-semibold">
                            Get Scholarship
                        </p>
                    </div>
                    <div className="bg-white rounded-xl flex flex-col gap-4 p-4 w-[25%] hover:border-2 hover:border-orange-400 transition-all shadow-lg">
                        <img className='w-[25%] mx-auto' src="https://cdn-icons-png.flaticon.com/512/3113/3113025.png" alt="" />
                        <h2 className="text-2xl font-bold mb-2 text-center">6,300</h2>
                        <p className="text-center font-semibold">
                        Awards Won
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statistics