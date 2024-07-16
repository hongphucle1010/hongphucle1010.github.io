import PropTypes from "prop-types";
import styles from "./LandingPage.module.scss";

export default function HeaderOfSection({ icons, title, link, linkText }) {
  return (
    <div className="flex justify-between w-full border-pink-300 border-b pb-2 items-center">
      <div>
        <span className="text-2xl mr-2">{icons}</span>
        <span className={`${styles.myFont} font-bold sm:text-xl`}>{title}</span>
      </div>
      <div>
        <a href={link} target="_blank" className="text-xs sm:text-sm">
          {linkText} →
        </a>
      </div>
    </div>
  );
}

HeaderOfSection.propTypes = {
  icons: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
};