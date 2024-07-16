import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ThemeContext } from "./config/ThemeConfig/ThemeConfig";
import { useState, useEffect } from "react";

const router = createBrowserRouter(routes);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
