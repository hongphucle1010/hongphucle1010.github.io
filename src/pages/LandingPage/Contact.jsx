import PropTypes from "prop-types";
import HeaderOfSection from "./HeaderOfSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

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
          link={"mailto:lhplhp10102004@gmail.com"}
          linkText={"Send email"}
        />
        <div className="pl-2 pt-2">
          <Subsection
            color="text-blue-500"
            icon={faFacebook}
            text="Facebook: fb.com/phuclehong1010"
            link="https://www.facebook.com/phuclehong1010"
          />
          <Subsection
            color="text-red-300"
            icon={faEnvelope}
            text="Mail: lhplhp10102004@gmail.com"
            link="mailto:lhplhp10102004@gmail.com"
          />
          <Subsection
            color="text-black dark:text-slate-200"
            icon={faGithubAlt}
            text="GitHub: github.com/lhplhp10102004"
            link="https://github.com/lhplhp10102004/"
          />
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
