import { render, screen } from "@testing-library/react";
import InvestmentForm from "../../components/InvestmentForm";
import userEvent from "@testing-library/user-event";

const getInputs = () => ({
  initialInvestment: screen.getByLabelText("Initial Investment"),
  annualInvestment: screen.getByLabelText("Annual Investment"),
  expectedReturns: screen.getByLabelText("Expected Returns"),
  duration: screen.getByLabelText("Duration"),
});

describe("form component", () => {
  beforeEach(() => {
    render(<InvestmentForm />);
  });

  test("form to be in document", () => {
    // check for form ellement
    const formElement = screen.getByRole("form", { name: "Investment form" });
    expect(formElement).toBeInTheDocument();
  });
  test("render 4 inputs", () => {
    // // Check that all input fields exist
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });
  test("each input should have correct label", () => {
    const { initialInvestment, annualInvestment, expectedReturns, duration } =
      getInputs();
    expect(initialInvestment).toBeInTheDocument();
    expect(annualInvestment).toBeInTheDocument();
    expect(expectedReturns).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
  });
  test("inputs should accept numbers", async () => {
    // simulate typing in input
    const { initialInvestment, annualInvestment, expectedReturns, duration } =
      getInputs();
    const user = userEvent.setup();
    await user.type(initialInvestment, "123");
    expect(initialInvestment).toHaveValue("123");
    await user.type(annualInvestment, "234");
    expect(annualInvestment).toHaveValue("234");
    await user.type(expectedReturns, "5.5");
    expect(expectedReturns).toHaveValue("5.5");
    await user.type(duration, "10");
    expect(duration).toHaveValue("10");
  });
});
