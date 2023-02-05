import React, { createContext, useState } from 'react';
import { NavBar, Projects, Skills } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switch';
import styles from '../styles/styles';
import '../App.css';
import '../styles/darkmode.css';

export const Home = () => {
  const themeContext = createContext(null);
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <themeContext.Provider value={{ theme, toogleTheme }}>
      <NavBar theme={theme} />
      <div className=" background h-screen bg-cover bg-fixed" id={theme}>
        <div className={styles.darkSwitch} id="darkmode">
          <span className=" darktext font-semibold">Dark mode</span>
          <FontAwesomeIcon
            icon="fa-solid fa-cloud-moon"
            className=" mb-[15px] text-2xl"
            inverse={theme === 'dark'}
          />
          <Switch
            onChange={toogleTheme}
            checked={theme === 'dark'}
            onColor="#3e77c7"
            offHandleColor="#696969"
            onHandleColor="#369aff"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
      <Projects theme={theme} />
      <Skills />
    </themeContext.Provider>
  );
};
