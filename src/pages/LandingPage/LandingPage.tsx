import WelcomeSection from "./WelcomeSection";
import AboutSection from "./About";
import Project from "./ProjectPage";
import Contact from "./Contact";

const LandingPage: React.FC = function () {
  return (
    <div className="flex flex-col items-center w-full p-0 py-3 dark:text-slate-100">
      <WelcomeSection />
      <AboutSection />
      <Project />
      <Contact />
    </div>
  );
};

export default LandingPage;