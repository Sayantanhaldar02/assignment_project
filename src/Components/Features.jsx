import React from 'react'

const Features = () => {
    return (
        <>
            <section className=" py-10">
                <h1 className="text-3xl font-bold my-4 text-center">Features for Learners</h1>
                <div className="flex flex-col justify-center gap-4 py-20  px-20">
                    <div className='grid grid-cols-3 gap-7'>
                        <div className=" h-[250px] w-[450px] bg-[url('https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.39.55%20AM%20(1).jpeg/:/rs=w:600,cg:true,m')] bg-cover bg-cente rounded-xl  gap-4 hover: transition-all shadow-lg ">
                            <div className='h-full w-full bg-[#0000003b] flex items-center justify-center'>
                                <h2 className="text-3xl font-bold mb-2 text-center text-white">Mathematics Lab</h2>
                            </div>
                        </div>
                        <div className=" h-[250px] w-[450px] bg-[url('https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.35%20PM%20(5).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1023,cg:true')] bg-cover bg-cente rounded-xl  gap-4 hover: transition-all shadow-lg">

                            <div className='h-full w-full bg-[#0000003b] flex items-center justify-center'>
                                <h2 className="text-3xl font-bold mb-2 text-center text-white">Science Lab</h2>
                            </div>
                        </div>
                        <div className=" h-[250px] w-[450px] bg-[url('https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.39.54%20AM.jpeg/:/rs=w:1280,h:960')] bg-cover bg-cente rounded-xl  gap-4  hover: transition-all shadow-lg">
                            <div className='h-full w-full bg-[#0000003b] flex items-center justify-center'>
                                <h2 className="text-3xl font-bold mb-2 text-center text-white">Computer Lab</h2>
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-7'>
                        <div className=" h-[250px] w-[450px] bg-[url('https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-19%20at%201.00.31%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true')] bg-cover bg-cente rounded-xl  gap-4 hover: transition-all shadow-lg ">
                            <div className='h-full w-full bg-[#0000003b] flex items-center justify-center'>
                                <h2 className="text-3xl font-bold mb-2 text-center text-white">Music</h2>
                            </div>
                        </div>
                        <div className=" h-[250px] w-[450px] bg-[url('https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2014.17.11_f6673a8b.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true')] bg-cover bg-cente rounded-xl  gap-4 hover: transition-all shadow-lg">

                            <div className='h-full w-full bg-[#0000003b] flex items-center justify-center'>
                                <h2 className="text-3xl font-bold mb-2 text-center text-white">Playground</h2>
                            </div>
                        </div>
                        <div className=" h-[250px] w-[450px] bg-[url('https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/blob-39fb38b.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870')] bg-cover bg-cente rounded-xl  gap-4  hover: transition-all shadow-lg">
                            <div className='h-full w-full bg-[#0000003b] flex items-center justify-center'>
                                <h2 className="text-3xl font-bold mb-2 text-center text-white">Library</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features