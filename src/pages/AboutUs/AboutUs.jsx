import React from 'react'
import HeroSection from '../../components/HeroSection.jsx/HeroSection'
const AboutUs = () => {
    return (
        <div><div
            style={{
                backgroundImage: `url('/HeroImg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className='text-white w-full h-96 justify-center items-center flex'> 
                <h1 className='text-4xl text-white font-bold'>About us</h1> 
            </div>
        </div>
            <div>
                <div className='flex flex-col mx-48 justify-center items-center mt-5 mb-3'>
                    <h1 className='text-3xl font-semibold pb-3 mt-6'>What do we stand for and how did we reach to it?</h1>
                    <p className='w-[80%] text-wrap text-justify text-gray-700 mt-6'>Remember the days when we used to fill our slam-books with career aspirations like scientist, teacher and doctor? Nobody at
                        that time thought there could’ve been a career in Travelling, let alone being a travelpreneur! But as life happens, you understand that a career could be anything where you can be a problem-solver for the society.<br />
                        And that’s how a few engineers from NIT Kurukshetra found that the travel industry in India needed a fresh burst of young energy! The need of the hour was to convert a dispersed agent based model to a more friendly ,transparent and an accessible community for Indian travellers, and hence WanderOn. Let’s have a closer look at the hustlers who’re on a mission to stir up people’s life with memorable experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs