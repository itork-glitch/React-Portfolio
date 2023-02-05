import React from 'react';
import '../styles/projects.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Projects = ({ theme }) => {
  return (
    <div
      className={`xs:h-[200vh] sm:200vh md:h-[150vh] lg:h-screen bg-slate-200 projects ${theme} py-[45px]`}
    >
      <div className="grid xs:grid-cols-1 xs:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-10 xs:mx-1 sm:mx-2 md:mx-3">
        <div className="card1 flex justify-center items-center my-3">
          <div
            className={`card lg:h-[50vh] h-[60vh] w-[80%] flex justify-center items-center flex-col ${
              theme === 'dark' ? 'darkcard' : 'card'
            }`}
          >
            <div className="title -mt-[3vh] lg:-mt-[2vh] font-semibold text-[45px] mb-[45px]">
              <h1
                className={`${theme === 'dark' ? 'darkp' : ''} ${
                  theme === 'dark' ? '' : 'title'
                }`}
              >
                Fire Bot
              </h1>
            </div>
            <div className="description flex flex-col justify-center">
              <p
                className={`text-center px-5 text-md mb-[45px] ${
                  theme === 'dark' ? 'darkp' : ''
                } `}
              >
                Fire Bot to bot do discorda o szerokim zastosowaniu posiada dużo
                komend każdej kategori. <br /> Dowiedz się więcej klikając w
                link.
              </p>
              <Link to="/commands" className="flex justify-center px-5">
                <button className="mb-[30px] p-4 rounded-xl text-white bg-black w-[60%] self-center hover:scale-110 lg:hover:w-[70%] transition-all duration-300 ease-out btn-shadow">
                  Sprawdź moje komendy
                </button>
              </Link>
              <Link to="/fire" className="flex justify-center px-5">
                <button className="p-4 rounded-xl text-white bg-black w-[80%] md:w-[60%] self-center hover:scale-110 lg:hover:w-[70%] transition-all duration-300 ease-out btn-shadow">
                  Dowiedz się więcej
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card2 flex justify-center items-center my-3">
          <div
            className={`lg:h-[50vh] h-[60vh] w-[80%] flex justify-center items-center flex-col ${
              theme === 'dark' ? 'darkcard' : 'card'
            }`}
          >
            <div className="title -mt-[3vh] lg:-mt-[2vh] font-semibold text-[45px] mb-[45px]">
              <h1
                className={`${theme === 'dark' ? 'darkp' : ''} ${
                  theme === 'dark' ? '' : 'title'
                } text-[40px] xs:text-[40px] sm:text-[55px] md:text-[42px]`}
              >
                React Luncher
              </h1>
            </div>
            <div className="description flex flex-col justify-center">
              <p
                className={`text-center px-5 text-[15px] mb-[45px] ${
                  theme === 'dark' ? 'darkp' : ''
                } `}
              >
                React Luncher to program który stworzyłem służy on do
                uruchamiania strony opartej na react.js na localhost. <br />
                Aby dowiedzieć się więcej klikij w link.
              </p>
              <a
                href="https://github.com/itork-glitch/React-Luncher"
                className="flex justify-center px-5"
              >
                <button className="mb-[30px] p-4 rounded-xl text-white bg-black w-[60%] self-center hover:scale-110 lg:hover:w-[70%] transition-all duration-300 ease-out btn-shadow">
                  <FontAwesomeIcon
                    icon="fa-brands fa-github"
                    className="mr-[7px] text-2xl"
                  />
                  Pobierz z GitHub
                </button>
              </a>
              <Link to="/luncher" className="flex justify-center px-5">
                <button className="p-4 rounded-xl text-white bg-black w-[80%] md:w-[60%] self-center hover:scale-110 lg:hover:w-[70%] transition-all duration-300 ease-out btn-shadow">
                  Dowiedz się więcej
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card3 md:col-[-3/-1] lg:col-[3/4] flex justify-center items-center my-3">
          <div
            className={`lg:h-[50vh] h-[60vh] w-[80%] md:w-[40%] sm:w-[80%] lg:w-[80%]  flex justify-center items-center flex-col ${
              theme === 'dark' ? 'darkcard' : 'card'
            }`}
          >
            <div className="title -mt-[3vh] lg:-mt-[2vh] font-semibold text-[45px] mb-[45px]">
              <h1
                className={`${theme === 'dark' ? 'darkp' : ''} ${
                  theme === 'dark' ? '' : 'title'
                } text-[40px] xs:text-[40px] sm:text-[55px] md:text-[38px]`}
              >
                Pasek ARGB
              </h1>
            </div>
            <div className="description flex flex-col justify-center">
              <p
                className={`text-center px-5 text-md mb-[45px] ${
                  theme === 'dark' ? 'darkp' : ''
                }`}
              >
                Pasek ARGB to system oświetlenia oparty na programowalnej płyce
                która zarządza paskiem kod programów jest dostępny pod linkiem
                <br />
                Aby dowiedzieć się więcej klikij w link.
              </p>
              <a
                href="https://github.com/itork-glitch?tab=repositories&q=&type=&language=c%2B%2B&sort="
                className="flex justify-center px-5"
              >
                <button className="mb-[30px] p-4 rounded-xl text-white bg-black w-[60%] self-center hover:scale-110 lg:hover:w-[70%] transition-all duration-300 ease-out btn-shadow">
                  <FontAwesomeIcon
                    icon="fa-brands fa-github"
                    className="mr-[7px] text-2xl"
                  />
                  Pobierz z GitHub
                </button>
              </a>
              <Link to="/fire" className="flex justify-center px-5">
                <button className="p-4 rounded-xl text-white bg-black w-[80%] md:w-[60%] self-center hover:scale-110 lg:hover:w-[70%] transition-all duration-300 ease-out btn-shadow">
                  Dowiedz się więcej
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
