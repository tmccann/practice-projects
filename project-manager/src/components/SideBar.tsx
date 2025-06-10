import { AddProjectButton } from "./Inputs/AddProjectButton";

const SideBar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900  md:w-72 rounded-tr-2xl">
      <h2 className="mb-8 text-stone-200 text-xl font-bold uppercase ">
        your projects
      </h2>

      <AddProjectButton>+ Add Project</AddProjectButton>
    </aside>
  );
};

export default SideBar;
