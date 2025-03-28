// Manages light/dark mode state
import { createContext, useState, useEffect, useContext } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// Custom hook for easier use
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the app
export const ThemeProvider = ({ children }) => {
  // Check local storage or default to light mode
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle theme and save to local storage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme class to the body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
