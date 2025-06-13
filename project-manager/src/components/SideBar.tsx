import { ProjectProps } from "../App";
import { AddProjectButton } from "./InputsAndButtons/AddProjectButton";

type SideBarProps = {
  onAddProject: () => void;
  projectsList: ProjectProps[];
  onSelectProject: (id: string) => void;
};
const SideBar = ({
  onAddProject,
  onSelectProject,
  projectsList,
}: SideBarProps) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900  md:w-72 rounded-tr-2xl">
      <h2 className="mb-8 text-stone-200 text-xl font-bold uppercase ">
        your projects
      </h2>

      <AddProjectButton onClick={onAddProject}>+ Add Project</AddProjectButton>
      <ul className="pt-8">
        {projectsList.map((project) => (
          <li className="px-2" key={project.id}>
            <button
              onClick={() => onSelectProject(project.id)}
              className=" w-full p-2 my-1 text-left rounded-sm text-stone-400 hover:bg-stone-600 hover:text-stone-200"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;

