import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import '../../styles/NavBar.module.css';

export const NavBar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const scrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSkills = () => {
    window.scrollTo({
      top: 2886,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.navBar} ref={dropdownRef} id="navbar">
      <div className="text-center inline-flex sm:flex">
        <div className="sm:block md:inline-block lg:inline-block">
          <span onClick={scrollToHome} className="cursor-pointer">
            <span
              className={`md:font-semibold font-medium ${
                theme === 'dark' ? 'darkspan' : ''
              }`}
              id="logo"
            >
              Itork
            </span>
            <br className=" block sm:hidden" />
            <span
              className={`md:font-normal font-light ml-[4px] ${
                theme === 'dark' ? 'darkspan' : ''
              }`}
              id="logo"
            >
              Portfolio
            </span>
          </span>
        </div>
      </div>

      <div className="" id="main-nav">
        <ul className=" inline-flex gap-[45px]">
          <li className="transition duration-300 ease-out hover:text-cyan-600">
            <Link
              to="/"
              className={`${theme === 'dark' ? 'darkspan' : 'lightspan'}`}
            >
              Strona Główna
            </Link>
          </li>
          <li className="mb-[4px] ease-in-out duration-300 hover:text-cyan-600">
            <Link
              to="/fire"
              className={`${theme === 'dark' ? 'darkspan' : 'lightspan'}`}
            >
              Projekty
            </Link>
          </li>
          <li className="transition duration-300 ease-out hover:text-cyan-600">
            <span
              onClick={scrollToSkills}
              className={`${theme === 'dark' ? 'darkspan' : 'lightspan'}`}
            >
              Umiejętości
            </span>
          </li>
        </ul>
      </div>

      <div className="z-[5]" id="small-nav">
        <li className=" list-none" onClick={() => setIsOpen(!isOpen)}>
          <div className="Menu ">
            <div className="transition duration-300 ease-out hover:text-cyan-600">
              <button
                className={`MenuButton ${theme === 'dark' ? 'darkspan' : ''}`}
              >
                Menu
              </button>
              <FontAwesomeIcon
                icon="fa-solid fa-angle-down"
                className=" ml-[7px] arrow "
                inverse={theme === 'dark'}
              />
            </div>

            {isOpen && (
              <div className={styles.dropdown} id="drop darkmode">
                <ul className="divide-y-[1.5px] divide-black">
                  <li className=" my-[4px] ease-in-out duration-300 hover:text-cyan-600">
                    <span
                      onClick={scrollToHome}
                      className="cursor-pointer mobile-link"
                    >
                      Strona Główna
                    </span>
                  </li>
                  <li className=" mb-[4px] ease-in-out duration-300 hover:text-cyan-600">
                    <span
                      onClick={scrollToProjects}
                      className="cursor-pointer mobile-link"
                    >
                      Projekty
                    </span>
                  </li>
                  <li className=" mb-[4px] ease-in-out duration-300 hover:text-cyan-600">
                    <span
                      onClick={scrollToSkills}
                      className="cursor-pointer mobile-link"
                    >
                      Umiejętosci
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
      </div>

      <div className="">
        <ul className=" inline-flex gap-[7px] sm:gap-[20px]">
          <li>
            <a href="https://www.instagram.com/_itork_/" target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className=" text-[15px] sm:text-[30px] switch"
                inverse={theme === 'dark'}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/itork-glitch" target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                className=" text-[15px] sm:text-[30px] switch"
                inverse={theme === 'dark'}
              />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/4nqtVmu4NP" target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-discord"
                className=" text-[15px] sm:text-[30px] switch"
                inverse={theme === 'dark'}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
