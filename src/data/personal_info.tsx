import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const PersonalInfo: PersonalInfoType = {
  name: "Hong Phuc Le",
  links: {
    Facebook: {
      icon: faFacebook,
      text: "Facebook: fb.com/hongphucle1010",
      link: "https://www.facebook.com/hongphucle1010",
      color: "text-blue-500",
    },
    Email: {
      icon: faEnvelope,
      text: `Mail: hongphucle1010@gmail.com`,
      link: `mailto:hongphucle1010@gmail.com`,
      email: "hongphucle1010@gmail.com",
      color: "text-red-300",
    },
    GitHub: {
      icon: faGithubAlt,
      text: "GitHub: github.com/hongphucle1010",
      link: "https://github.com/hongphucle1010/",
      color: "text-black dark:text-slate-200",
    },
    LinkedIn: {
      icon: faLinkedin,
      text: "LinkedIn: linkedin.com/in/hongphucle1010",
      link: "https://www.linkedin.com/in/hongphucle1010",
      color: "text-blue-500",
    },
  },
  schools: [
    {
      year: { start: "2022", end: "current" },
      school: "VNU-HCM HCMC University of Technology",
      address: "HCMC, Vietnam",
      occupation: "Undergraduate Student",
    },
    {
      year: { start: "2019", end: "2022" },
      school: "VNU-HCM High School for the Gifted",
      address: "HCMC, Vietnam",
      occupation: "High School Student (Math Specialization)",
    },
  ],
  experiences: [
    {
      year: { start: "Jun. 2025", end: "Aug. 2025" },
      role: "Backend Intern",
      company: "FPT Corporation (FTown3)",
      address: "HCMC, Vietnam",
      description: "Golang Backend Development (Iris Framework)",
    },
  ],
};

type PersonalLink = {
  icon?: IconProp;
  text?: string;
  link?: string;
  color?: string;
  email?: string;
};

type SchoolType = {
  year: {
    start: string;
    end: string | "current";
  };
  school: string;
  address?: string;
  occupation?: string;
};

type ExperienceType = {
  year: {
    start: string;
    end: string;
  };
  role: string;
  company: string;
  address?: string;
  description?: string;
};

type PersonalInfoType = {
  name: string;
  links: {
    [key: string]: PersonalLink;
  };
  schools: SchoolType[];
  experiences: ExperienceType[];
};
