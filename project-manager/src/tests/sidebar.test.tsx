import { screen, render } from "@testing-library/react";
import SideBar from "../components/SideBar";
import userEvent from "@testing-library/user-event";

let mockProjects = [
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

const mockAddProject = vi.fn();
const mockOnSelectProject = vi.fn();
export const getSideBarElements = () => {
  return {
    sidebar: screen.getByRole("complementary"),
    sideBarh2: screen.getByRole("heading", { level: 2, name: "your projects" }),
    sideBarButton: screen.getByRole("button", { name: "+ Add Project" }),
    projectList: screen.getAllByRole("listitem"),
    project1: screen.getByText("New project 1"),
    project2: screen.getByText("New project 2"),
    project3: screen.getByText("New project 3"),
    projectButtons: screen.getAllByRole("button").slice(1),
  };
};

const user = userEvent.setup();

describe("Sidebar Component", () => {
  beforeEach(() => {
    render(
      <SideBar
        onAddProject={mockAddProject}
        onSelectProject={mockOnSelectProject}
        projectsList={mockProjects}
      />
    );
  });
  test("aside, h2, and button should be rendered, with correct content", () => {
    const { sidebar, sideBarh2, sideBarButton } = getSideBarElements();
    expect(sidebar).toBeInTheDocument();
    expect(sideBarh2).toBeInTheDocument();
    expect(sideBarButton).toBeInTheDocument();
  });
  test("projects title should be displayed as link to slected task", () => {
    const { projectList, project1, project2, project3 } = getSideBarElements();
    expect(projectList).toHaveLength(3);

    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
    expect(project3).toBeInTheDocument();
  });
  test("test addProject and project Button", async () => {
    const { sideBarButton, projectButtons } = getSideBarElements();
    await user.click(sideBarButton);
    expect(mockAddProject).toHaveBeenCalled();
    for (const [index, button] of projectButtons.entries()) {
      await user.click(button);
      expect(mockOnSelectProject).toBeCalledWith((index + 1).toString());
    }
  });
});
