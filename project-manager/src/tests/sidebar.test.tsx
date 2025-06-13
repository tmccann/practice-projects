import { screen, render } from "@testing-library/react";
import SideBar from "../components/SideBar";
import userEvent from "@testing-library/user-event";

let mockProjects = [
  {
    id: "1",
    title: "New project",
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

const mockAddProject = vi.fn();
export const getSideBarElements = () => {
  return {
    sidebar: screen.getByRole("complementary"),
    sideBarh2: screen.getByRole("heading", { level: 2, name: "your projects" }),
    sideBarButton: screen.getByRole("button", { name: "+ Add Project" }),
  };
};

const user = userEvent.setup();

describe("Sidebar Component", () => {
  test("aside, h2, and button should be rendered, with correct content", () => {
    render(
      <SideBar onAddProject={mockAddProject} projectsList={mockProjects} />
    );
    const { sidebar, sideBarh2, sideBarButton } = getSideBarElements();
    expect(sidebar).toBeInTheDocument();
    expect(sideBarh2).toBeInTheDocument();
    expect(sideBarButton).toBeInTheDocument();
  });
  test("projects title should be displayed as link to slected task", () => {
    const projectList = screen.getByRole("list");
    expect(projectList).toHaveLength(3);
    const project1 = screen.getByText("New project 1");
    const project2 = screen.getByText("New project 2");
    const project3 = screen.getByText("New project 3");
    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
    expect(project3).toBeInTheDocument();
  });
});
