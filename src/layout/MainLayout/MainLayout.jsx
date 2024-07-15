import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Outlet />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
