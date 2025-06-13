import { ProjectProps } from "../App";
import { AddProjectButton } from "./InputsAndButtons/AddProjectButton";

type SideBarProps = {
  onAddProject: () => void;
  projectsList: ProjectProps[];
};
const SideBar = ({ onAddProject, projectsList }: SideBarProps) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900  md:w-72 rounded-tr-2xl">
      <h2 className="mb-8 text-stone-200 text-xl font-bold uppercase ">
        your projects
      </h2>

      <AddProjectButton onClick={onAddProject}>+ Add Project</AddProjectButton>
    </aside>
  );
};

export default SideBar;

