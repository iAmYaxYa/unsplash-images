import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const getInitialDarkTheme = () => {
  const userPrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return userPrefers;
  }
  return storedTheme === "true";
};

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialDarkTheme());
  const [query, setQuery] = useState("cat");

  const toggleDarkMode = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme);
  }, [theme]);
  return (
    <GlobalContext.Provider value={{ theme, toggleDarkMode, query, setQuery }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => useContext(GlobalContext);
