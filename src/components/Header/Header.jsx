import styles from "./Header.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../config/ThemeConfig/ThemeConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const navItemArray = [
  { name: "Home", path: "/#" },
  { name: "Dummy Page", path: "/#dummy" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];
import { useNavigate } from "react-router-dom";

const CloseButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ThreeSlashButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const ThemeSwitchButton = ({ darkMode, toggleDarkMode }) => {
  const MoonIcon = (
    <div
      className="flex justify-center items-center w-full"
      style={{
        height: "100%",
      }}
    >
      <FontAwesomeIcon icon={faMoon} className="text-white" />
    </div>
  );
  const SunIcon = (
    <div
      className="flex justify-center items-center w-full"
      style={{
        height: "100%",
      }}
    >
      <FontAwesomeIcon icon={faSun} className="text-white" />
    </div>
  );
  return (
    <ReactSwitch
      checked={darkMode}
      onChange={toggleDarkMode}
      onColor="#334155"
      onHandleColor="#000"
      offColor="#52525B"
      offHandleColor="#fff"
      checkedIcon={MoonIcon}
      uncheckedIcon={SunIcon}
    />
  );
};

const NavList = () => (
  <ul className={`hidden gap-4 lg:flex`}>
    {navItemArray.map((navItem) => (
      <li key={navItem.name} className="mx-2">
        <a href={navItem.path}>{navItem.name}</a>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sticky top-0">
      <nav className="w-full flex h-14 p-2 items-center justify-around border-blue-500 border-b bg-white dark:bg-slate-900	dark:border-cyan-200 dark:text-slate-200">
        <button
          className={styles.header_name}
          onClick={() => handleNavigation("/")}
        >
          Hồng Phúc Lê
        </button>
        <NavList />
        <ThemeSwitchButton
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <button
          className="h-6 w-6 lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <CloseButton /> : <ThreeSlashButton />}
        </button>
      </nav>
      {openNav ? (
        <div className={`w-full absolute ${styles.myAnimation}`}>
          {navItemArray.map((navItem) => (
            <div
              key={navItem.name}
              className=" flex h-14 p-2 items-center justify-around bg-pink-200	opacity-90 hover:bg-green-200 hover:cursor-pointer dark:bg-slate-700 dark:text-slate-200"
            >
              <button onClick={() => handleNavigation(navItem.path)}>
                {navItem.name}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Header;

NavList.propTypes = {
  hidden: PropTypes.bool,
};

ThemeSwitchButton.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
};
