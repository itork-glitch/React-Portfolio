import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skills = () => {
  return (
    <div className="lg:h-screen xs:h-[120vh] bg-slate-300  p-5 flex justify-around items-center">
      <div className="lg:w-[30%] lg:block xs:hidden">
        <img src="/skils-photo.jpg" alt="skills" className="object-contain" />
      </div>
      <div className="grid grid-cols-1 grid-rows-4 gap-12 lg:grid-cols-2 lg:grid-rows-2 place-items-center">
        <div className="p-8 rounded-[50px] bg-[#e0e0e0] skils-grid xs:w-[150%] lg:w-auto">
          <div className="">
            <h1 className="text-[45px] text-center pb-4">
              <FontAwesomeIcon icon="fa-brands fa-windows" /> UWP
            </h1>
          </div>
          <div className="text-center">
            Obecnie w fazie deweloperskiej <br /> jest program wykorzystującej{' '}
            <br />
            Universal Windows Platform
          </div>
        </div>
        <div className="p-8 rounded-[50px] bg-[#e0e0e0] skils-grid xs:w-[150%] lg:w-auto">
          <div className="">
            <h1 className="text-[45px] text-center pb-4">
              <FontAwesomeIcon icon="fa-brands fa-react" /> React
            </h1>
          </div>
          <div className="text-center">
            Strona którą właśnie odwiedzasz <br /> jest stworzona w React
          </div>
        </div>
        <div className="p-8 rounded-[50px] bg-[#e0e0e0] skils-grid xs:w-[150%] lg:w-auto">
          <div className="">
            <h1 className="text-[45px] text-center pb-4">
              <FontAwesomeIcon icon="fa-solid fa-microchip" /> Open AI
            </h1>
          </div>
          <div className="text-center">
            Obecnie w fazie deweloperskiej <br /> jest kopia strony DALL-E,
            <br />
            stworzona w MERN
          </div>
        </div>
        <div className="p-8 rounded-[50px] bg-[#e0e0e0] skils-grid xs:w-[150%] lg:w-auto">
          <div className="">
            <h1 className="text-[45px] text-center pb-4">
              <FontAwesomeIcon icon="fa-brands fa-node" /> Node
            </h1>
          </div>
          <div className="text-center">
            Obecnie w fazie testów znajduje się
            <br /> projekt bota opartego o Discord.js
          </div>
        </div>
      </div>
    </div>
  );
};
