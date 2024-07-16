import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../config/ThemeConfig/ThemeConfig";

const MainLayout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <div className="dark:bg-slate-800">
        <Header />
        {children}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
