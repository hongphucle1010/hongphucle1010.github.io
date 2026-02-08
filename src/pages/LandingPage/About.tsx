import React from "react";
import styles from "./LandingPage.module.scss";
import HeaderOfSection from "./HeaderOfSection";
import { PersonalInfo } from "../../data/personal_info";

const ExperienceSubsection: React.FC<ExperienceSubsectionProps> = ({
  year,
  role,
  company,
  address,
  description,
  isLast = false,
}) => (
  <div className={`relative pl-6 ${!isLast ? "pb-8" : ""}`}>
    <div
      className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-blue-500 dark:border-cyan-400 dark:bg-cyan-400"
      aria-hidden
    />
    <p className="text-sm text-blue-300 dark:text-cyan-400">
      {year.start} – {year.end}
    </p>
    <p className="grid grid-cols-[1fr_auto] items-baseline gap-4">
      <span className="font-bold">
        {role} — {company}
      </span>
      <span className="italic text-blue-300 dark:text-cyan-400 shrink-0 text-right">
        {address}
      </span>
    </p>
    <p className="text-gray-400">{description}</p>
  </div>
);

const StudySubsection: React.FC<StudySubsectionProps> = ({
  year,
  school,
  address,
  occupation,
  isLast = false,
}) => (
  <div className={`relative pl-6 ${!isLast ? "pb-8" : ""}`}>
    <div
      className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-blue-500 dark:border-cyan-400 dark:bg-cyan-400"
      aria-hidden
    />
    <p className="text-sm text-blue-300 dark:text-cyan-400">
      {year.start} - {year.end}
    </p>
    <p className="grid grid-cols-[1fr_auto] items-baseline gap-4">
      <span className="font-bold">{school}</span>
      <span className="italic text-blue-300 dark:text-cyan-400 shrink-0 text-right">
        {address}
      </span>
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
        <div className="flex flex-col w-full gap-10 lg:flex-row">
          <Subsection>
            <p className={`${styles.myFont} font-medium dark:text-cyan-300`}>
              My Story
            </p>
            <p className="my-4 text-justify">
              I am a passionate computer science student who is always eager to
              learn new technologies and improve my skills.
            </p>
            <p className="my-4 text-justify">
              Rather than locking myself into a specific niche, I enjoy
              exploring different areas of computer science. My motivation comes
              from creating something &quot;cool&quot; — whether it&apos;s a
              useful tool that simplifies everyday tasks or a project that pushes
              my technical understanding a bit further. 
            </p>

          </Subsection>
          <Subsection>
            <p className={`${styles.myFont} font-medium	dark:text-cyan-300`}>
              Education
            </p>
            <div className="mt-4 border-l-2 border-blue-300 dark:border-cyan-400">
              {PersonalInfo.schools.map((school, index) => (
                <StudySubsection
                  key={index}
                  year={school.year}
                  school={school.school}
                  address={school.address}
                  occupation={school.occupation}
                  isLast={index === PersonalInfo.schools.length - 1}
                />
              ))}
            </div>
            <p className={`${styles.myFont} font-medium dark:text-cyan-300 mt-8`}>
              Experience
            </p>
            <div className="mt-4 border-l-2 border-blue-300 dark:border-cyan-400">
              {PersonalInfo.experiences.map((exp, index) => (
                <ExperienceSubsection
                  key={index}
                  year={exp.year}
                  role={exp.role}
                  company={exp.company}
                  address={exp.address}
                  description={exp.description}
                  isLast={index === PersonalInfo.experiences.length - 1}
                />
              ))}
            </div>
          </Subsection>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

type ExperienceSubsectionProps = {
  year: {
    start: string;
    end: string;
  };
  role: string;
  company: string;
  address?: string;
  description?: string;
  isLast?: boolean;
};

type StudySubsectionProps = {
  year: {
    start: string;
    end: string;
  };
  school: string;
  address?: string;
  occupation?: string;
  isLast?: boolean;
};

type SubsectionProps = {
  children: React.ReactNode;
};
