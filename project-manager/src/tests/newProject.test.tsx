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

describe("input handling and validation", () => {
  beforeEach(() => {
    render(<NewProject cancel={mockCancel} handleSubmit={mockHandleSubmit} />);
  });
  test("shows validation errors when all inputs are blank", async () => {
    const { saveButton } = getNewProjectElement();
    await user.click(saveButton);
    expect(screen.getByText("title is to short")).toBeInTheDocument();
    expect(screen.getByText("description is to short")).toBeInTheDocument();
    expect(
      screen.getByText("The date must be today or later.")
    ).toBeInTheDocument();
  });
  test("shows validation errors for invalid inputs", async () => {
    const { titleInput, descriptionInput, dateInput, saveButton } =
      getNewProjectElement();

    await user.type(titleInput, "abc"); // to short
    await user.type(descriptionInput, "efg"); // to short
    fireEvent.change(dateInput, { target: { value: "2025-06-12" } }); // past date

    await user.click(saveButton);
    expect(screen.getByText("title is to short")).toBeInTheDocument();
    expect(screen.getByText("description is to short")).toBeInTheDocument();
    expect(
      screen.getByText("The date must be today or later.")
    ).toBeInTheDocument();
  });

  test("valid input triggers handleSubmit with correct data", async () => {
    const { titleInput, descriptionInput, dateInput, saveButton } =
      getNewProjectElement();
    const today = new Date().toISOString().split("T")[0];

    await user.type(titleInput, "abcd");
    await user.type(descriptionInput, "efgh");
    fireEvent.change(dateInput, { target: { value: today } });
    await user.click(saveButton);
    expect(mockHandleSubmit).toHaveBeenCalledWith({
      title: "abcd",
      description: "efgh",
      date: today,
    });
  });

  test("cancel buttong tirggers cancel function", async () => {
    const { cancelButton } = getNewProjectElement();
    await user.click(cancelButton);
    expect(mockCancel).toHaveBeenCalled();
  });
});
