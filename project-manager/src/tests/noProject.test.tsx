import { screen, render } from "@testing-library/react";
import NoProject from "../components/NoProject";
import userEvent from "@testing-library/user-event";

export const getSideBarElements = () => {
  return {
    noProjectImage: screen.getByAltText("clipboard and pen"),
    noProjectH2: screen.getByRole("heading", {
      level: 2,
      name: "No project selected",
    }),
    noProjectInst: screen.getByText(
      "Select a project or get started with a new one"
    ),
    noProjectButton: screen.getByRole("button", { name: "Create new project" }),
  };
};

const user = userEvent.setup();

describe("Sidebar Component", () => {
  test("renders image, h2, instructions, and button with correct content", () => {
    render(<NoProject />);
    const { noProjectImage, noProjectH2, noProjectInst, noProjectButton } =
      getSideBarElements();
    expect(noProjectImage).toBeInTheDocument();
    expect(noProjectH2).toBeInTheDocument();
    expect(noProjectInst).toBeInTheDocument();
    expect(noProjectButton).toBeInTheDocument();
  });

  test("button should fire handleNewProject on click", async () => {
    const handleNewProject = vi.fn();
    render(<NoProject handleNewProject={handleNewProject} />);
    const { noProjectButton } = getSideBarElements();
    await user.click(noProjectButton);
    expect(handleNewProject).toHaveBeenCalled();
  });
});
