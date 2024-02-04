import { createContext, useContext, useEffect, useState } from "react";

import React from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: (newTheme: string) => {},
});

// Define a ThemeProvider component that wraps its children in ThemeContext.Provider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Retrieve the current theme from local storage or default to 'light'
  const [theme, setTheme] = useState<string>("light");

  // Effect to apply the theme class to the root element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  // Return the context provider with the theme and updateTheme function
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
