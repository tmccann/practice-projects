import { render, screen } from "@testing-library/react";
import Result from "../../components/Result";

describe("result component", () => {
  beforeEach(() => {
    render(<Result />);
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
