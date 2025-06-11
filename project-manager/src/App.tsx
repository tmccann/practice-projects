import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";

const projects = [
  {
    id: "1",
    title: "new Project",
    description: "Description will be here",
    date: "12/03/25",
    tasks: ["task 1"],
  },
];

type Mode = "none" | "create" | { id: string };

export default function App() {
  const [mode, setMode] = useState<Mode>({ id: "12" });

  return (
    <>
      {/* Layout: container split into 30% sidebar, 70% main content */}

      <div className="flex h-svh pt-6">
        {/* Sidebar: shows list of projects to select from */}
        <SideBar />

        {/* Main content
          no project compontent on initial render */}

        {mode === "none" && <NoProject />}

        {/*show newProject when creatre project clicked (default to noProject when newProject form saved) */}
        {mode === "create" && <NewProject />}
        {/* show corresponding project when selected selected from list */}

        {typeof mode === "object" && <SelectedProject project={mode.id} />}
      </div>
    </>
  );
}
