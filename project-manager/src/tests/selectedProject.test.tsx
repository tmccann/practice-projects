import { screen, render } from "@testing-library/react";
import SelectedProject from "../components/SelectedProject";

const mockProject = {
  title: "Title test",
  dueDate: "12/06/25",
  discription: "New Task",
  tasks: [],
};

export const getSelectedProjectElements = () => {
  return {
    selectedHeader: screen.getByRole("heading", { name: "test" }),
    selectedDate: screen.getByText("July 12, 2025"),
    selectedDeleteButton: screen.getByRole("button", { name: "Delete" }),
    selectedDescrioption: screen.getByText("Description will be here"),
    selectedh2: screen.getByRole("heading", { name: "Task" }),
    selectedInput: screen.getByLabelText("Add Task"),
    noTasksMessage: screen.getByText(
      "This project does not have any tasks yet."
    ),
    selectedAddTask: screen.getByRole("button", { name: "Add Task" }),
  };
};

describe("selected Project element", () => {
  beforeEach(() => {
    render(<SelectedProject />);
  });
  test("passed values render correctly", () => {
    const {
      selectedHeader,
      selectedDate,
      selectedDeleteButton,
      selectedDescrioption,
    } = getSelectedProjectElements();
    expect(selectedHeader).toBeInTheDocument();
    expect(selectedDate).toBeInTheDocument();
    expect(selectedDeleteButton).toBeInTheDocument();
    expect(selectedDescrioption).toBeInTheDocument();
  });
  test("h2, input button and paragraph render correctly", () => {
    const { selectedh2, selectedInput, noTasksMessage, selectedAddTask } =
      getSelectedProjectElements();
    expect(selectedh2).toBeInTheDocument();
    expect(selectedInput).toBeInTheDocument();
    expect(noTasksMessage).toBeInTheDocument();
    expect(selectedAddTask).toBeInTheDocument();
  });
});
