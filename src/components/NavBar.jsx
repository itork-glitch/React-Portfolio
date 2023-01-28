import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/styles";
import Switch from "react-switch";

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

  return (
    <div className={styles.navBar} id="navbar">
      <div className="text-center inline-flex sm:flex">
        <div className="sm:block md:inline-block lg:inline-block">
          <span className="md:font-semibold font-medium">Itork</span>
          <br className=" block sm:hidden" />
          <span className="md:font-normal font-light ml-[4px]">Portfolio</span>
        </div>
      </div>

      <div className="" id="main-nav">
        <ul className=" inline-flex gap-[45px]">
          <li>
            <a href="">Strona Główna</a>
          </li>
          <li>
            <a href="">Projekty</a>
          </li>
          <li>
            <a href="">Umiejętności</a>
          </li>
        </ul>
      </div>

      <div className="z-[5]" id="small-nav">
        <li className=" list-none" onClick={() => setIsOpen(!isOpen)}>
          <div className="Menu">
            <button className="MenuButton">Menu</button>
            <FontAwesomeIcon
              icon="fa-solid fa-angle-down"
              className=" ml-[7px]"
            />

            {isOpen && (
              <div className={styles.dropdown} ref={dropdownRef} id="drop">
                <ul>
                  <li className=" ">
                    <a href="">Strona Główna</a>
                  </li>
                  <li>
                    <a href="">Projekty</a>
                  </li>
                  <li>
                    <a href="">Umiejętności</a>
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
            <a href="">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className=" text-[15px] sm:text-[30px]"
              />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                className=" text-[15px] sm:text-[30px]"
              />
            </a>
          </li>
          <li>
            <a href="">
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
