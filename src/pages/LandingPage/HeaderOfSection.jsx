import PropTypes from "prop-types";
import styles from "./LandingPage.module.scss";
import { useNavigate } from "react-router-dom";

export default function HeaderOfSection({
  icons,
  title,
  link,
  linkText,
  navLink,
}) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="flex justify-between w-full border-blue-300 border-b pb-2 items-center">
      <div>
        <span className="text-2xl mr-2">{icons}</span>
        <span className={`${styles.myFont} font-bold sm:text-xl`}>{title}</span>
      </div>
      <div>
        {link ? (
          <a href={link} target="_blank" className="text-xs sm:text-sm">
            {linkText} →
          </a>
        ) : navLink ? (
          <button onClick={() => handleNavigation(navLink)} className="text-xs sm:text-sm">
            {" "}
            {linkText}{" →"}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

HeaderOfSection.propTypes = {
  icons: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  navLink: PropTypes.string,
};
