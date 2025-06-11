import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <>
      {/* Layout: container split into 30% sidebar, 70% main content */}

      <div className="flex h-svh pt-6">
        {/* Sidebar: shows list of projects to select from */}
        <SideBar />

        {/* Main content:
          - Show "Add Project" form when no project is selected
          - Show list of tasks for selected project otherwise */}
        <SelectedProject />
      </div>
    </>
  );
}
