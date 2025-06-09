import { screen, render } from "@testing-library/react";
import SideBar from "../components/SideBar";
import userEvent from "@testing-library/user-event";
const getSideBarElements = () => {
  return {
    sidebar: screen.getByRole("complementary"),
    h2: screen.getByRole("heading", { level: 2 }),
    button: screen.getByRole("button"),
  };
};

const user = userEvent.setup();

test("aside, h2, and button should be rendered, with correct content", () => {
  render(<SideBar />);
  const { sidebar, h2, button } = getSideBarElements();
  expect(sidebar).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(h2).toHaveTextContent("your projects");
  expect(button).toHaveTextContent("+ Add Project");
});
test("button should fire handleNewProject on click", () => {
  const handleNewProject = vi.fn(); // or jest.fn() if using Jest

  render(<SideBar handleNewProject={handleNewProject} />);
  const { button } = getSideBarElements();
  user.click(button);
  expect(handleNewProject).toHaveBeenCalled();
});
