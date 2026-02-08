import HeaderOfSection from "./HeaderOfSection";
const ProjectsSection: React.FC = () => {
  return (
    <div id="projects" className="w-full flex justify-center py-4">
      <div className="w-4/5">
        <HeaderOfSection
          title="Projects"
          icons={"📁"}
          navLink={"/project"}
          linkText={"See more"}
        />
        <div className="mt-2">
          <p>This section is unavailable at the moment.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
