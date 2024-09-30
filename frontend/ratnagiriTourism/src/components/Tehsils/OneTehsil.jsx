import React from 'react';

export default function OneTehsil({ tName, discription, backgroundImage }) {
  return (
    <div
      className="relative z-10 flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="  p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">{tName}</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">{discription}</p>
        <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-sky-500 text-white font-semibold hover:bg-sky-600 transition duration-300">
          Visit
        </button>
      </div>
    </div>
  );
}
