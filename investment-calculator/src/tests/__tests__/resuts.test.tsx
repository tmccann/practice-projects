import { render, screen } from "@testing-library/react";
import Result from "../../components/Result";

const mockResult = [
  {
    year: 1,
    investmentValue: 1200,
    interestYear: 100,
    totalInterest: 100,
    investedCapital: 1100,
  },
  {
    year: 2,
    investmentValue: 1420,
    interestYear: 120,
    totalInterest: 220,
    investedCapital: 1200,
  },
];

const getTableContent = () => ({
  rows: screen.getAllByRole("row").slice(1), // remove header
});
describe("result component", () => {
  beforeEach(() => {
    render(<Result tableData={mockResult} />);
  });
  test("table has been rendered with thead with 5 columns", () => {
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(5);
  });
  test("theads have the correct title in correct order", () => {
    const headers = screen.getAllByRole("columnheader");
    expect(headers[0]).toHaveTextContent("Year");
    expect(headers[1]).toHaveTextContent("Investment Value");
    expect(headers[2]).toHaveTextContent("Interest(Year)");
    expect(headers[3]).toHaveTextContent("Total Interest");
    expect(headers[4]).toHaveTextContent("Invested Capital");
  });
});
describe("table content", () => {
  beforeEach(() => {
    render(<Result tableData={mockResult} />);
  });
  describe("table structure", () => {
    test("table contents rows equals results length", () => {
      const { rows } = getTableContent();
      expect(rows).toHaveLength(mockResult.length);
    });
    test("table should have 5 columns", () => {
      const { rows } = getTableContent();
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        expect(cells).toHaveLength(5);
      });
    });
  });
  describe("table has no empty cells", () => {
    test("each cell has a value", () => {
      const { rows } = getTableContent();
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        cells.forEach((cell) => {
          expect(cell).not.toBeEmptyDOMElement();
        });
      });
    });
  });
  describe("table content format and values", () => {
    test("Year column displays values from 1 to result length", () => {
      const { rows } = getTableContent();
      rows.forEach((row, index) => {
        let count = index + 1;
        const cells = row.querySelectorAll("td")[0];
        expect(cells).toHaveTextContent(String(count));
      });
    });
    test("investment value column has correct formatting and value", () => {
      const investmentValueCell = screen.getByTestId("investmentValue-1");
      expect(investmentValueCell).toHaveTextContent("£1,200");
      const interestYear = screen.getByTestId("interestYear-year-1");
      expect(interestYear).toHaveTextContent("£100");
      const totalInterest = screen.getByTestId("totalInterest-1");
      expect(totalInterest).toHaveTextContent("£100");
      const investedCapital = screen.getByTestId("investedCapital-1");
      expect(investedCapital).toHaveTextContent("£1,100");
    });
    test("final value matches expected value", () => {
      const lastRow = mockResult.length - 1;
      const investmentValueCell = screen.getByTestId(
        `investmentValue-${lastRow}`
      );
      expect(investmentValueCell).toHaveTextContent("£1,420");
      const interestYear = screen.getByTestId(`interestYear-${lastRow}`);
      expect(interestYear).toHaveTextContent("£120");
      const totalInterest = screen.getByTestId(`totalInterest-${lastRow}`);
      expect(totalInterest).toHaveTextContent("£220");
      const investedCapital = screen.getByTestId(`investedCapital-${lastRow}`);
      expect(investedCapital).toHaveTextContent("£1,200");
    });
  });
});
