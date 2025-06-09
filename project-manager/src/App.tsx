import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <>
      {/* Layout: container split into 30% sidebar, 70% main content */}

      {/* Sidebar: shows list of projects to select from */}

      {/* Main content:
          - Show "Add Project" form when no project is selected
          - Show list of tasks for selected project otherwise */}
      <div className="flex h-svh pt-6">
        <SideBar />
        <NoProject />
      </div>
    </>
  );
}
