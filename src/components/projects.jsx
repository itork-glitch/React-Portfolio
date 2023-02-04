import React from 'react';
import '../styles/projects.css';

export const Projects = ({ id }) => {
  return (
    <div className={`h-[200vh] bg-slate-300 projects ${id} py-[45px]`}>
      <div className="grid xs:grid-cols-1 xs:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-10 mx-8 xs:mx-2 sm:mx-4 md:mx-5">
        <div className="card1 flex justify-center items-center my-3">
          <div className="card h-[60vh] w-[80%] flex justify-center items-center">
            <div className="title -mt-[47vh] font-semibold text-[45px] flex justify-center">
              <h1>Fire Bot</h1>
            </div>
            <div className="description ">
              <p>H</p>
              <button>J</button>
            </div>
          </div>
        </div>
        <div className="card2">G</div>
        <div className="card3 md:col-[-3/-1] lg:col-[3/4]">H</div>
      </div>
    </div>
  );
};
