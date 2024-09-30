import React from 'react';
import Tehsil from '../Tehsils/Tehsil'
import FrontImage from '../../Images/FrontImage.jpg';

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <img className='absolute inset-0 w-full h-full object-cover' src={FrontImage} alt='front Image' />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 font-playfair">Ratnagiri</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl font-roboto max-w-[20rem] text-gray-900">Explore Adventure, Serenity, and Spirituality</p>
          <button className='p-1 sm:p-2 bg-orange-500 rounded-md mt-2'>Explore</button>
        </div>
      </div>
      <Tehsil />
    </div>
  );
}
