import React from "react";
import styles from "./LandingPage.module.scss";
import HeaderOfSection from "./HeaderOfSection";
import { PersonalInfo } from "../../data/personal_info";

const StudySubsection: React.FC<StudySubsectionProps> = ({
  year,
  school,
  address,
  occupation,
}) => (
  <div className="my-4">
    <p className="text-sm text-blue-300 dark:text-cyan-400">
      {year.start} - {year.end}
    </p>
    <p className="flex justify-between">
      <span className="mr-8 font-bold">{school}</span>
      <span className="italic text-blue-300 dark:text-cyan-400">{address}</span>
    </p>
    <p className="text-gray-400">{occupation}</p>
  </div>
);

const Subsection: React.FC<SubsectionProps> = ({ children }) => {
  return <section className="w-full lg:w-1/2">{children}</section>;
};

const AboutSection = () => {
  return (
    <div
      id="about"
      className="border-blue-500 border-t border-dashed pt-4 flex justify-center w-full dark:border-cyan-200"
    >
      <section className="w-4/5 flex flex-col justify-center items-center gap-3">
        <HeaderOfSection
          title="About Me"
          icons={"🧑🏼‍💻"}
          link={PersonalInfo.links.LinkedIn.link}
          linkText={"View LinkedIn"}
        />
        <div className="flex flex-col w-full gap-2 lg:flex-row">
          <Subsection>
            <p className={`${styles.myFont} font-medium dark:text-cyan-300`}>
              My Story
            </p>
            <p className="my-4">
              I am a passionate computer science student who is always eager to
              learn new technologies and improve my skills.
            </p>
          </Subsection>
          <Subsection>
            <p className={`${styles.myFont} font-medium	dark:text-cyan-300`}>
              Where I have studied
            </p>
            {PersonalInfo.schools.map((school, index) => (
              <StudySubsection
                key={index}
                year={school.year}
                school={school.school}
                address={school.address}
                occupation={school.occupation}
              />
            ))}
          </Subsection>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

type StudySubsectionProps = {
  year: {
    start: string;
    end: string;
  };
  school: string;
  address?: string;
  occupation?: string;
};

type SubsectionProps = {
  children: React.ReactNode;
};
