import { fireEvent, render, screen } from "@testing-library/react";
import NewProject from "../components/NewProject";
import userEvent from "@testing-library/user-event";

export const getNewProjectElement = () => {
  return {
    cancelButton: screen.getByRole("button", { name: "Cancel" }),
    saveButton: screen.getByRole("button", { name: "Save" }),
    titleInput: screen.getByTestId("title"),
    descriptionInput: screen.getByTestId("description"),
    dateInput: screen.getByTestId("date"),
  };
};
const mockCancel = vi.fn();
const mockHandleSubmit = vi.fn();
const user = userEvent.setup();
describe("New project component", () => {
  beforeEach(() => {
    render(<NewProject cancel={mockCancel} handleSubmit={mockHandleSubmit} />);
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
  test("inputs values change", async () => {
    const { titleInput, descriptionInput, dateInput } = getNewProjectElement();
    await userEvent.type(titleInput, "test project");
    expect(titleInput).toHaveValue("test project");
    fireEvent.change(dateInput, { target: { value: "2025-06-20" } });
    expect(dateInput).toHaveValue("2025-06-20");
    await user.type(descriptionInput, "this is a test");
    expect(descriptionInput).toHaveValue("this is a test");
  });
});
// ********** all test below this line currently fail *************
describe("input handling and validation", () => {
  beforeEach(() => {
    render(<NewProject cancel={mockCancel} handleSubmit={mockHandleSubmit} />);
  });
  test("input throw error if values blank", async () => {
    const { saveButton } = getNewProjectElement();
    await user.click(saveButton);
    expect(screen.getByText("title is to short")).toBeInTheDocument();
    expect(screen.getByText("description is to short")).toBeInTheDocument();
    expect(
      screen.getByText("The date must be today or later.")
    ).toBeInTheDocument();
  });
  test("inputs throws error if data invalid", async () => {
    const { titleInput, descriptionInput, dateInput } = getNewProjectElement();
    // title input less than 4 char
    await user.type(titleInput, "abc");
    // description less than 4 char
    await user.type(descriptionInput, "efg");
    // date in the past
    fireEvent.change(dateInput, { target: { value: "2025-06-10" } });
    expect(screen.getByText("title is to short")).toBeInTheDocument();
    expect(screen.getByText("description is to short")).toBeInTheDocument();
    expect(
      screen.getByText("The date must be today or later.")
    ).toBeInTheDocument();
  });
  test("valid values past to handlesumbit function", async () => {
    const { titleInput, descriptionInput, dateInput, saveButton } =
      getNewProjectElement();
    const today = new Date().toISOString().split("T")[0];

    await user.type(titleInput, "abcd");
    await user.type(descriptionInput, "efgh");
    fireEvent.change(dateInput, { target: { value: today } });
    await user.click(saveButton);
    expect(mockHandleSubmit).toBeCalledWith({
      title: "abcd",
      description: "efgh",
      date: today,
    });
  });
});
