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
const formatTest = (rows: HTMLTableRowElement[]) => {
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    for (let i = 1; i < cells.length; i++) {
      const currentcell = row.querySelectorAll("td")[i];
      expect(currentcell).toHaveTextContent(/^£\d{1,3}(,\d{3})*$/);
    }
  });
};

const getElements = () => {
  const columnHeaders = screen.getAllByRole("columnheader");
  const rows = screen.getAllByRole("row").slice(1) as HTMLTableRowElement[];

  return {
    header: {
      pageHeader: screen.getByRole("banner"),
      title: screen.getByRole("heading", { name: "Investment Calculator" }),
      logo: screen.getByAltText("Money bag surrounded by gold coins stacks"),
    },
    form: {
      formElement: screen.getByRole("form", { name: "Investment form" }),
      inputs: screen.getAllByRole("spinbutton"),
      initialInvestment: screen.getByLabelText("Initial Investment"),
      annualInvestment: screen.getByLabelText("Annual Investment"),
      expectedReturns: screen.getByLabelText("Expected Returns"),
      duration: screen.getByLabelText("Duration"),
    },
    resultsTable: {
      tableElement: screen.getByRole("table"),
      columnHeaders: {
        year: columnHeaders[0],
        investmentValue: columnHeaders[1],
        currentYearInterest: columnHeaders[2],
        totalInterest: columnHeaders[3],
        investedCapital: columnHeaders[4],
      },
      rows,
    },
  };
};

describe("App flow", () => {
  test("renders everything and handles input + table output", async () => {
    const user = userEvent.setup();
    render(<App />);
    const { header, form, resultsTable } = getElements();
    // ---------------------
    // Header component tests
    // ---------------------
    // Check that the header, title, and logo are rendered
    expect(header.pageHeader).toBeInTheDocument();
    expect(header.title).toBeInTheDocument();
    expect(header.logo).toBeInTheDocument();

    // ---------------------
    // Form structure tests
    // ---------------------
    // Form is present
    expect(form.formElement).toBeInTheDocument();
    // There are 4 inputs with role="spinbutton"
    expect(form.inputs).toHaveLength(4);
    // Each input has correct label
    expect(form.initialInvestment);
    // Table is rendered below the form
    expect(resultsTable.tableElement).toBeInTheDocument();
    // ---------------------
    // Table tests
    // ---------------------

    // Table is rendered below the form
    expect(resultsTable.tableElement).toBeInTheDocument();
    // Table headers are present and have correct text:
    //   - Year
    //   - Investment Value
    //   - Total Investment
    //   - Returns
    //   - Total Value
    expect(resultsTable.columnHeaders.year).toHaveTextContent("Year");
    expect(resultsTable.columnHeaders.investmentValue).toHaveTextContent(
      "Investment Value"
    );
    expect(resultsTable.columnHeaders.currentYearInterest).toHaveTextContent(
      "Interest(Year)"
    );
    expect(resultsTable.columnHeaders.totalInterest).toHaveTextContent(
      "Total Interest"
    );
    expect(resultsTable.columnHeaders.investedCapital).toHaveTextContent(
      "Invested Capital"
    );

    // Table has correct number of rows matching the duration input value
    let durationValue;
    durationValue = Number((form.duration as HTMLInputElement).value);
    expect(resultsTable.rows).toHaveLength(durationValue);

    // Each cell in every row has a non-empty value (not blank)
    forEachTableCell({
      rows: resultsTable.rows,
      cellTestFn: (cell) => {
        expect(cell).not.toBeEmptyDOMElement();
      },
    });
    // Verify "Year" column starts at 1 and increments correctly

    resultsTable.rows.forEach((row, index) => {
      let count = index + 1;
      const cells = row.querySelectorAll("td")[0];
      expect(cells).toHaveTextContent(String(count));
    });

    // Check the formatting of currency values in investment-related columns
    formatTest(resultsTable.rows);
    // ---------------------
    // Initial input state test
    // ---------------------
    // Each input starts with expected default value:
    //   - initialInvestment: 100
    //   - annualInvestment: 10
    //   - expectedReturns: 5
    //   - duration: 10
    expect(form.initialInvestment).toHaveValue(100);
    expect(form.annualInvestment).toHaveValue(10);
    expect(form.expectedReturns).toHaveValue(5);
    expect(form.duration).toHaveValue(10);

    // ---------------------
    // Simulate input changes
    // ---------------------
    // Clear and type new value into initialInvestment (e.g. 200)
    // Clear and type new value into duration (e.g. 5)
    await user.clear(form.initialInvestment);
    await user.type(form.initialInvestment, "200");
    expect(form.initialInvestment).toHaveValue(200);
    await user.clear(form.annualInvestment);
    await user.type(form.annualInvestment, "20");
    expect(form.annualInvestment).toHaveValue(20);
    await user.clear(form.expectedReturns);
    await user.type(form.expectedReturns, "10");
    expect(form.expectedReturns).toHaveValue(10);
    await user.clear(form.duration);
    await user.type(form.duration, "5");
    expect(form.duration).toHaveValue(5);
    // ---------------------
    // Result table updates
    // ---------------------

    // Each cell in every row has a value (not empty)
    forEachTableCell({
      rows: resultsTable.rows,
      cellTestFn: (cell) => {
        expect(cell).not.toBeEmptyDOMElement();
      },
    });
    // Table rows match new duration (e.g. 5 rows)
    expect(form.duration).toHaveValue(5);
    // -----------------------------
    // Result content and formatting
    // -----------------------------
    // year 1 values match expected:
    // investmentValue:£240, InterestYear:£20,totalIntrest:£20, InvestedCapital:£220
    const investmentValue = screen.getByTestId("investmentValue-year-1");
    expect(investmentValue).toHaveTextContent("£240");
    const interestYear = screen.getByTestId("interestYear-year-1");
    expect(interestYear).toHaveTextContent("£20");
    const totalInterest = screen.getByTestId("totalInterest-year-1");
    expect(totalInterest).toHaveTextContent("£20");
    const investedCapital = screen.getByTestId("investedCapital-year-1");
    expect(investedCapital).toHaveTextContent("£220");
    // final year value match expected
    const finalYear = (durationValue = Number(
      (form.duration as HTMLInputElement).value
    ));
    const finalInvestmentValue = screen.getByTestId(
      `investmentValue-year-${finalYear}`
    );
    expect(finalInvestmentValue).toHaveTextContent("£444");
    const finalInterestYear = screen.getByTestId(
      `interestYear-year-${finalYear}`
    );
    expect(finalInterestYear).toHaveTextContent("£39");
    const finalTotalInterest = screen.getByTestId(
      `totalInterest-year-${finalYear}`
    );
    expect(finalTotalInterest).toHaveTextContent("£144");
    const finalInvestedCapital = screen.getByTestId(
      `investedCapital-year-${finalYear}`
    );
    expect(finalInvestedCapital).toHaveTextContent("£300");
  });
});
