import PropTypes from "prop-types";
import HeaderOfSection from "./HeaderOfSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PersonalInfo } from "../../data/personal_info";

const Subsection = function ({ color, icon, text, link }) {
  return (
    <p className={color}>
      <FontAwesomeIcon icon={icon} className="mr-1" />
      <a href={link} target="_blank">
        {text}
      </a>
    </p>
  );
};

export default function Contact() {
  return (
    <div id="contact" className="w-full flex justify-center">
      <div className="w-4/5">
        <HeaderOfSection
          title="Contact"
          icons={"📲"}
          link={PersonalInfo.links.Email.link}
          linkText={"Send email"}
        />
        <div className="pl-2 pt-2">
          {Object.keys(PersonalInfo.links).map((linkKey) => (
            <Subsection
              key={linkKey}
              color={PersonalInfo.links[linkKey].color}
              icon={PersonalInfo.links[linkKey].icon}
              text={PersonalInfo.links[linkKey].text}
              link={PersonalInfo.links[linkKey].link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Subsection.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  link: PropTypes.string,
};
