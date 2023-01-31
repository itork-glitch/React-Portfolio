import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/styles";
import "../styles/NavBar.module.css";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const scrollToProjects = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSkills = () => {
    window.scrollTo({
      top: 2160,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.navBar} ref={dropdownRef} id="navbar">
      <div className="text-center inline-flex sm:flex">
        <div className="sm:block md:inline-block lg:inline-block">
          <span onClick={scrollToHome} className="cursor-pointer">
            <span className="md:font-semibold font-medium">Itork</span>
            <br className=" block sm:hidden" />
            <span className="md:font-normal font-light ml-[4px]">
              Portfolio
            </span>
          </span>
        </div>
      </div>

      <div className="" id="main-nav">
        <ul className=" inline-flex gap-[45px]">
          <li className="transition duration-300 ease-out hover:text-cyan-600">
            <span
              onClick={scrollToHome}
              className="cursor-pointer"
              id="nav-link">
              Strona Główna
            </span>
          </li>
          <li className="mb-[4px] ease-in-out duration-300 hover:text-cyan-600">
            <span
              onClick={scrollToProjects}
              className="cursor-pointer"
              id="nav-link">
              Projekty
            </span>
          </li>
          <li className="transition duration-300 ease-out hover:text-cyan-600">
            <span
              onClick={scrollToSkills}
              className="cursor-pointer"
              id="nav-link">
              Umiejętości
            </span>
          </li>
        </ul>
      </div>

      <div className="z-[5]" id="small-nav">
        <li className=" list-none" onClick={() => setIsOpen(!isOpen)}>
          <div className="Menu ">
            <div className="transition duration-300 ease-out hover:text-cyan-600">
              <button className="MenuButton ">Menu</button>
              <FontAwesomeIcon
                icon="fa-solid fa-angle-down"
                className=" ml-[7px] "
              />
            </div>

            {isOpen && (
              <div className={styles.dropdown} id="drop">
                <ul className="divide-y-[1.5px] divide-black">
                  <li className=" my-[4px] ease-in-out duration-300 hover:text-cyan-600">
                    <span onClick={scrollToHome} className="cursor-pointer">
                      Strona Główna
                    </span>
                  </li>
                  <li className=" mb-[4px] ease-in-out duration-300 hover:text-cyan-600">
                    <span onClick={scrollToProjects} className="cursor-pointer">
                      Projekty
                    </span>
                  </li>
                  <li className=" mb-[4px] ease-in-out duration-300 hover:text-cyan-600">
                    <span onClick={scrollToSkills} className="cursor-pointer">
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
                className=" text-[15px] sm:text-[30px]"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/itork-glitch" target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                className=" text-[15px] sm:text-[30px]"
              />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/4nqtVmu4NP" target="_blank">
              <FontAwesomeIcon
                icon="fa-brands fa-discord"
                className=" text-[15px] sm:text-[30px]"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
