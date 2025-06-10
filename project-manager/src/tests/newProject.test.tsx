import { render, screen } from "@testing-library/react";
import NewProject from "../components/NewProject";

const getNewProjectElement = () => {
  return {
    cancelButton: screen.getByRole("button", { name: "Cancel" }),
    saveButton: screen.getByRole("button", { name: "save" }),
    titleInput: screen.getByTestId("titleInput"),
    descriptionInput: screen.getByTestId("description"),
    dateInput: screen.getByTestId("date"),
  };
};
describe("New project component", () => {
  beforeEach(() => {
    render(<NewProject />);
  });
  test("buttons cancel and save render", () => {
    const { cancelButton, saveButton } = getNewProjectElement();
    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
  test("inputs title descriptions and daterender ", () => {
    const { titleInput, descriptionInput, dateInput } = getNewProjectElement();
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
  });
  test("inputs values change", () => {});
});
