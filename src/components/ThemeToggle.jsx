// Add a light/dark theme toggle button
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Icons for light/dark mode

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
