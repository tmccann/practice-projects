import { screen, render } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { getNewProjectElement } from "./newProject.test";

const getAppElements = () => {
  return {
    sideBarAddProjectButton: screen.getByRole("button", {
      name: "+ Add Project",
    }),
    noProjectCreateButton: screen.getByRole("button", {
      name: "Create new project",
    }),
  };
};

describe("app test", () => {
  const user = userEvent.setup();

  test("compents behave a ses[ected with state", async () => {
    render(<App />);
    let { sideBarAddProjectButton, noProjectCreateButton } = getAppElements();
    // -------- buttons navigate to correct page ---------------
    expect(sideBarAddProjectButton).toBeInTheDocument();
    expect(noProjectCreateButton).toBeInTheDocument();
    await user.click(sideBarAddProjectButton);
    const { cancelButton } = getNewProjectElement();
    expect(cancelButton).toBeInTheDocument();
    await user.click(cancelButton);
    const button = await screen.findByRole("button", {
      name: "Create new project",
    });
    expect(button).toBeInTheDocument();
  });
});
