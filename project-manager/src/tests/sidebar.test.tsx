import { screen, render } from "@testing-library/react";
import SideBar from "../components/SideBar";
import userEvent from "@testing-library/user-event";

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
    render(<SideBar />);
    const { sidebar, sideBarh2, sideBarButton } = getSideBarElements();
    expect(sidebar).toBeInTheDocument();
    expect(sideBarh2).toBeInTheDocument();
    expect(sideBarButton).toBeInTheDocument();
  });
  test("button should fire handleNewProject on click", async () => {
    const handleNewProject = vi.fn(); // or jest.fn() if using Jest

    render(<SideBar handleNewProject={handleNewProject} />);
    const { sideBarButton } = getSideBarElements();
    await user.click(sideBarButton);
    expect(handleNewProject).toHaveBeenCalled();
  });
});
