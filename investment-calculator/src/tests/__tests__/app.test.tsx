import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

type forEachTableCell = {
  rows: HTMLTableRowElement[];
  cellTestFn: (cell: HTMLTableCellElement) => void;
};
const forEachTableCell = ({ rows, cellTestFn }: forEachTableCell) => {
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    cells.forEach((cell) => {
      cellTestFn(cell as HTMLTableCellElement);
    });
  });
};

const getElements = () => {
  const columnHeaders = screen.getAllByRole("columnheader");
  const rows = screen.getAllByRole("row").slice(1) as HTMLTableRowElement[];

  return {
    header: {
      header: screen.getByRole("banner"),
      title: screen.getByRole("heading", { name: "Investment Calculator" }),
      logo: screen.getByAltText("Money bag surrounded by gold coins stacks"),
    },
    form: {
      formElement: screen.getByRole("form", { name: "Investment form" }),
      tableElement: screen.getByRole("table"),
      inputs: screen.getAllByRole("spinbutton"),
      initialInvestment: screen.getByLabelText("Initial Investment"),
      annualInvestment: screen.getByLabelText("Annual Investment"),
      expectedReturns: screen.getByLabelText("Expected Returns"),
      duration: screen.getByLabelText("Duration"),
    },
    results: {
      columnHeaders: {
        year: columnHeaders[0],
        investmentValue: columnHeaders[1],
        totalInvestment: columnHeaders[2],
        returns: columnHeaders[3],
        totalValue: columnHeaders[4],
      },
      rows,
      firstRow: rows[0],
    },
  };
};

describe("App flow", () => {
  test("renders everything and handles input + table output", () => {
    render(<App />);
    const { header, form, results } = getElements();
    // ---------------------
    // Header component tests
    // ---------------------
    // Check that the header, title, and logo are rendered

    // ---------------------
    // Form structure tests
    // ---------------------
    // Form is present
    // There are 4 inputs with role="spinbutton"
    // Each input has correct label
    // Table is rendered below the form

    // ---------------------
    // Initial input state test
    // ---------------------
    // Each input starts with expected default value:
    //   - initialInvestment: 100
    //   - annualInvestment: 10
    //   - expectedReturns: 5
    //   - duration: 10

    // ---------------------
    // Simulate input changes
    // ---------------------
    // Clear and type new value into initialInvestment (e.g. 200)
    // Clear and type new value into duration (e.g. 5)

    // ---------------------
    // Result table updates
    // ---------------------
    // Table rows match new duration (e.g. 5 rows)
    // Each cell in every row has a value (not empty)

    // ---------------------
    // Result content formatting (optional)
    // ---------------------
    // "Year" column starts at 1 and increments
    // "Investment Value", "Total Investment", "Returns", "Total Value" columns contain properly formatted currency
    // Final "Total Value" cell matches the expected result based on input
  });
});
