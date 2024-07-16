import WelcomeSection from "./WelcomeSection";
import AboutSection from "./About";
import Contact from "./Contact";

  
export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full p-0">
      <WelcomeSection />
      <AboutSection />
      <Contact />
    </div>
  );
}
