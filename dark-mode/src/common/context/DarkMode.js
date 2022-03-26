import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext({ state: { isDark: false } });

export const useDarkMode = () => useContext(DarkModeContext);

function setDarkMode(setDarkModeState){
    return (darkMode) => {
        const html = document.querySelector("html")
        if(darkMode){
            html.classList.add("dark-mode");
            setDarkModeState(darkMode);
            return;
        }

        html.classList.remove("dark-mode");
        setDarkModeState(darkMode);
    }
}

function ContextProvider({ children }) {
  const [darkModeState, setDarkModeState] = useState(false);
  return (
    <DarkModeContext.Provider
      value={{
        state: { isDark: darkModeState },
        setDarkMode: setDarkMode(setDarkModeState),
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export default ContextProvider;
