import styles from "./LandingPage.module.scss";
import PropTypes from "prop-types";
import HeaderOfSection from "./HeaderOfSection";

const StudySubsection = ({ year, school, address, occupation }) => (
  <div className="my-4">
    <p className="text-sm text-pink-300">
      {year.start} - {year.end}
    </p>
    <p className="flex justify-between">
      <span className="mr-8 font-bold">{school}</span>
      <span className="italic text-pink-300">{address}</span>
    </p>
    <p className="text-gray-400">{occupation}</p>
  </div>
);

const Subsection = function ({ children }) {
  return <section className="w-full lg:w-1/2">{children}</section>;
};

const AboutSection = () => {
  return (
    <div
      id="about"
      className="border-pink-500 border-t border-dashed pt-4 flex justify-center w-full"
    >
      <section className="w-4/5 flex flex-col justify-center items-center gap-3">
        <HeaderOfSection
          title="About Me"
          icons={"🧑🏼‍💻"}
          link={"https://www.linkedin.com/in/lhplhp10102004/"}
          linkText={"View LinkedIn"}
        />
        <div className="flex flex-col w-full gap-2 lg:flex-row">
          <Subsection>
            <p className={`${styles.myFont} font-medium`}>My Story</p>
            <p className="my-4">
              I am a passionate software developer who is always eager to learn
              new technologies and improve my skills.
            </p>
          </Subsection>
          <Subsection>
            <p className={`${styles.myFont} font-medium	`}>
              Where I have studied
            </p>
            <StudySubsection
              year={{ start: "2022", end: "current" }}
              school="HCMUT"
              address="HCMC, Vietnam"
              occupation="Undergraduate Student"
            />
            <StudySubsection
              year={{ start: "2019", end: "2022" }}
              school="VNU-HCM High School for the Gifted"
              address="HCMC, Vietnam"
              occupation="High School Student"
            />
          </Subsection>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

/* Props validation */

StudySubsection.propTypes = {
  year: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),
  school: PropTypes.string,
  address: PropTypes.string,
  occupation: PropTypes.string,
};

Subsection.propTypes = {
  children: PropTypes.node,
};
