import React from 'react';
import '../styles/projects.css';
import { Route, Routes, Link, Navigate, Outlet } from 'react-router-dom';
import { FireBot } from '../pages/FireBot';
import App from '../App';

export const Projects = ({ id }) => {
  return (
    <div
      className={`xs:h-[200vh] sm:200vh md:h-[150vh] lg:h-screen bg-slate-300 projects ${id} py-[45px]`}
    >
      <div className="grid xs:grid-cols-1 xs:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-10 mx-8 xs:mx-1 sm:mx-2 md:mx-3">
        <div className="card1 flex justify-center items-center my-3">
          <div className="card lg:h-[50vh] h-[60vh] w-[80%] flex justify-center items-center flex-col">
            <div className="title -mt-[20vh] lg:-mt-[22vh] font-semibold text-[45px] mb-[45px]">
              <h1>Fire Bot</h1>
            </div>
            <div className="description">
              <p className="text-center px-5">
                Fire Bot to bot do discorda o szerokim zastosowaniu posiada dużo
                komend każdej kategori. <br /> Dowiedz się więcej klikając w
                link.
              </p>
              <Link to="/fire">Klik</Link>
            </div>
          </div>
        </div>
        <div className="card2">G</div>
        <div className="card3 md:col-[-3/-1] lg:col-[3/4]">H</div>
      </div>
    </div>
  );
};
