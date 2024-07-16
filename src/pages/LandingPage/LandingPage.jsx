import styles from "./LandingPage.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const WelcomeSection = () => (
  <div
    className={`${styles.myStyle} w-full flex  justify-center items-center gap-3 flex-col-reverse lg:flex-row lg:px-20`}
  >
    <section className="w-1/2 flex flex-col justify-center text-3xl gap-1 lg:w-full">
      <p className="text-4xl">👋🏼</p>
      <h1 className={`${styles.myFont} font-bold mb-3`}>
        Hi, I&#39;m Hong Phuc
      </h1>
      <p className="text-xl">
        I&#39;m currently an undergraduate student at HCMUT, working towards my
        goal of becoming a software engineer🧑🏼‍💻.
      </p>
      <p className="text-xl">
        I enjoy playing chess ♟️ and watching movies🍿.{" "}
      </p>
    </section>
    <div className="w-1/2 flex justify-center items-center container">
      <img
        src="src/assets/images/myPictureAtDamSen.jpg"
        alt="My Picture"
        style={{
          width: "clamp(200px, 100%, 400px)",
          height: "auto",
          borderRadius: "20px",
        }}
      />
    </div>
  </div>
);

const HeaderOfSection = function ({ icons, title, link, linkText }) {
  return (
    <div className="flex justify-between w-full border-pink-300 border-b pb-2 text-xl">
      <div>
        <span className="text-2xl mr-2">{icons}</span>
        <span className={`${styles.myFont} font-bold`}>{title}</span>
      </div>
      <div>
        <a href={link} target="_blank" className="text-sm">
          {linkText} →
        </a>
      </div>
    </div>
  );
};

HeaderOfSection.propTypes = {
  icons: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

const AboutSection = () => {
  const Subsection = ({ year, school, address, occupation }) => (
    <div className="my-4">
      <p className="text-sm text-pink-300">
        {year.start} - {year.end}
      </p>
      <p>
        <span className="mr-8 font-bold">{school}</span>
        <span className="italic text-pink-300">{address}</span>
      </p>
      <p className="text-gray-400">{occupation}</p>
    </div>
  );
  Subsection.propTypes = {
    year: PropTypes.shape({
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    school: PropTypes.string,
    address: PropTypes.string,
    occupation: PropTypes.string,
  };
  return (
    <div
      id="about"
      className="border-pink-500 border-t border-dashed pt-4 flex justify-center"
    >
      <section className="w-4/5 flex flex-col justify-center items-center gap-3">
        <HeaderOfSection
          title="About Me"
          icons={"🧑🏼‍💻"}
          link={"https://www.linkedin.com/in/lhplhp10102004/"}
          linkText={"View LinkedIn"}
        />
        <div className="flex flex-col w-full gap-2 lg:flex-row">
          <section className="w-full lg:w-1/2">
            <p className={`${styles.myFont} font-medium`}>My Story</p>
            <p className="my-4">
              I am a passionate software developer who is always eager to learn
              new technologies and improve my skills.
            </p>
          </section>
          <section className="w-full lg:w-1/2">
            <p className={`${styles.myFont} font-medium	`}>
              Where I have studied
            </p>
            <Subsection
              year={{ start: "2022", end: "current" }}
              school="HCMUT"
              address="HCMC, Vietnam"
              occupation="Undergraduate Student"
            />
            <Subsection
              year={{ start: "2019", end: "2022" }}
              school="VNU-HCM High School for the Gifted"
              address="HCMC, Vietnam"
              occupation="High School Student"
            />
          </section>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
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
          <p className="text-blue-500">
            <FontAwesomeIcon icon={faFacebook} className="mr-1" />
            <a href="https://www.facebook.com/phuclehong1010" target="_blank">
              Facebook: fb.com/phuclehong1010
            </a>
          </p>
          <p className="text-pink-300">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            <a href="mailto:lhplhp10102004@gmail.com" target="_blank">
              Mail: lhplhp10102004@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div>
      <WelcomeSection />
      <AboutSection />
      <Contact />
    </div>
  );
}
