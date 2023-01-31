import React, { createContext, useState } from "react";
import "./App.css";
import { NavBar, Projects, Skills } from "./components/index";
import "./styles/darkmode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "react-switch";
import styles from "./styles/styles";

export const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, toogleTheme }}>
      <div className=" background h-screen bg-cover bg-fixed" id={theme}>
        <NavBar />
        <div className={styles.darkSwitch} id="darkmode">
          <span className=" darktext font-semibold">Dark mode</span>
          <FontAwesomeIcon
            icon="fa-solid fa-cloud-moon"
            className=" mb-[15px] text-2xl"
            inverse={theme === "dark"}
          />
          <Switch
            onChange={toogleTheme}
            checked={theme === "dark"}
            onColor="#3e77c7"
            offHandleColor="#696969"
            onHandleColor="#369aff"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
      <Projects id={theme} />
      <Skills />
    </themeContext.Provider>
  );
}

export default App;
