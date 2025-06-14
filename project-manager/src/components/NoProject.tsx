import logo from "../assets/no-projects.png";
import { AddProjectButton } from "./InputsAndButtons/AddProjectButton";

type NoProjectProps = {
  onAddProject: () => void;
};
const NoProject = ({ onAddProject }: NoProjectProps) => {
  return (
    <div className="w-2/3 px-8 py-16 text-center">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={logo}
        alt="clipboard and pen"
      />
      <h2 className=" text-2xl font-bold text-stone-500 py-4">
        No project selected
      </h2>
      <p className="font-bold text-stone-500 py-4">
        Select a project or get started with a new one
      </p>
      <AddProjectButton onClick={onAddProject}>
        Create new project
      </AddProjectButton>
    </div>
  );
};

export default NoProject;
