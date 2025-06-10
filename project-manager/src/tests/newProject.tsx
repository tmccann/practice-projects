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
  render(<NewProject />);
  test("buttons cancel and save render", () => {});
  test("inputs title descriptions and daterender ", () => {});
  test("inputs values change", () => {});
});
