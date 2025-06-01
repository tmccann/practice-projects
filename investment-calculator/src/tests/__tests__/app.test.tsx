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
describe("app flow", () => {
  render(<App />);
  describe("header component", () => {
    test("header, title and logo have been rendered", () => {});
  });
  describe("InvestmentForm component", () => {
    describe("form and inputs have been rendered", () => {
      test("renders form with 4 labeled number inputs", () => {});
    });
  });
  describe("investment Form state handling", () => {
    test("Inputs render with intial state values", () => {
      // intialstate values are initialInvestment: 100,annualInvestment: 10,expectedReturns: 5,duration: 10,
    });
    test("inputs display value updates to match state", () => {});
  });
  describe("results Component", () => {
    describe("basic table structure renders", () => {
      test("table Renders with 5 columns", () => {});
      test("table rows are equal to duration value", () => {});
      test("each cell has a value", () => {});
    });
    describe("table contant and values", () => {
      test("table year displays value for 1 to results.length", () => {});
      test("investment value column has correct formatting and value", () => {});
      test("final value matches expected value", () => {});
    });
  });
});
