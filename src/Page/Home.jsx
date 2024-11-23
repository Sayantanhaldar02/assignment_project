import React, { useState } from 'react';
import Hero from "../Components/Hero"
import About from '../Components/About';
import Contact from '../Components/Contact';
import Benifits from '../Components/Benifits';
import Features from '../Components/Features';
import Statistics from '../Components/Statistics';



const Home_Page = () => {
    const [active, setActive] = useState(0);
    const images = [
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />,
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />,
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />,
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-violet-700 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Vishal Bharti School</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:text-gray-200 transition duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-200 transition duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-200 transition duration-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-200 transition duration-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>


            <Hero />
            <About />

            <Benifits />
            <Features />
            <Statistics />
            <Contact />

            <footer className="bg-violet-700 text-white p-4">
                <h1 className="text-2xl font-bold mb-2 text-center">Vishal Bharti School</h1>
                <p className="text text-center">
                    © 2024  Vishal Bharti School. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home_Page;