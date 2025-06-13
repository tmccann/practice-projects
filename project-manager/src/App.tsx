import { useState } from "react";
import NewProject, { DataProps } from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";

export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  date: string;
  tasks: string[];
};
const projects = [
  {
    id: "1",
    title: "New project 1",
    description: "Description will be here",
    date: "12/03/25",
    tasks: ["task 1"],
  },
  {
    id: "2",
    title: "New project 2",
    description: " Description will be here",
    date: "12/03/25",
    tasks: ["task "],
  },
  {
    id: "3",
    title: "New project 3",
    description: " Description will be here",
    date: "12/03/25",
    tasks: ["task "],
  },
];

type Mode = "none" | "create" | { id: string };

export default function App() {
  const [mode, setMode] = useState<Mode>("none");

  const onAddProject = () => {
    setMode("create");
  };
  const onNoProject = () => {
    setMode("none");
  };

  const onSelectProject = (id: string) => {
    setMode({ id: id });
  };

  const handleSubmit = (data: DataProps) => {
    console.log(data);
  };
  return (
    <>
      {/* Layout: container split into 30% sidebar, 70% main content */}

      <div className="flex h-svh pt-6">
        {/* Sidebar: shows list of projects to select from */}
        <SideBar
          onAddProject={onAddProject}
          onSelectProject={onSelectProject}
          projectsList={projects}
        />

        {/* Main content
          no project compontent on initial render */}

        {mode === "none" && <NoProject onAddProject={onAddProject} />}

        {/*show newProject when creatre project clicked (default to noProject when newProject form saved) */}
        {mode === "create" && (
          <NewProject cancel={onNoProject} handleSubmit={handleSubmit} />
        )}
        {/* show corresponding project when selected selected from list */}

        {typeof mode === "object" && <SelectedProject project={mode.id} />}
      </div>
    </>
  );
}
