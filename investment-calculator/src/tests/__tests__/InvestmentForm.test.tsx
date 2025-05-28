import { render, screen } from "@testing-library/react";
import InvestmentForm from "../../components/InvestmentForm";
import userEvent from "@testing-library/user-event";
import InvestmentFormWrapper from "./testWrappers/InvestmentFormWrapper";

const getInputs = () => ({
  initialInvestment: screen.getByLabelText("Initial Investment"),
  annualInvestment: screen.getByLabelText("Annual Investment"),
  expectedReturns: screen.getByLabelText("Expected Returns"),
  duration: screen.getByLabelText("Duration"),
});

describe("form component", () => {
  beforeEach(() => {
    render(<InvestmentFormWrapper />);
  });

  test("form to be in document", () => {
    // check for form ellement
    const formElement = screen.getByRole("form", { name: "Investment form" });
    expect(formElement).toBeInTheDocument();
  });
  test("render 4 inputs", () => {
    // // Check that all input fields exist
    // All inputs use type="number", so test roles are 'spinbutton' instead of 'textbox'
    const inputs = screen.getAllByRole("spinbutton");
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
});
describe("InvestmentForm state handling", () => {
  beforeEach(() => {
    render(<InvestmentFormWrapper />);
  });
  // intialstate values :intialInvestment: 100, annualInvestment: 10, expectedReturns: 5,duration: 10,
  test("Inputs render with intial state values", () => {
    const { initialInvestment, annualInvestment, expectedReturns, duration } =
      getInputs();
    expect(initialInvestment).toHaveValue(100);
    expect(annualInvestment).toHaveValue(10);
    expect(expectedReturns).toHaveValue(5);
    expect(duration).toHaveValue(10);
  });
  test("form state updates on input change", async () => {
    const user = userEvent.setup();
    const { initialInvestment, annualInvestment, expectedReturns, duration } =
      getInputs();
    await user.clear(initialInvestment);
    await user.type(initialInvestment, "90");
    await user.clear(annualInvestment);
    await user.type(annualInvestment, "15");
    await user.clear(expectedReturns);
    await user.type(expectedReturns, "4");
    await user.clear(duration);
    await user.type(duration, "5");
    expect(initialInvestment).toHaveValue(90);
    expect(annualInvestment).toHaveValue(15);
    expect(expectedReturns).toHaveValue(4);
    expect(duration).toHaveValue(5);
  });
});
