import { useState } from "react";

export type FormValueProps = {
  intialInvestment: number;
  annualInvestment: number;
  expectedReturns: number;
  duration: number;
};
const initialFormValues: FormValueProps = {
  intialInvestment: 100,
  annualInvestment: 10,
  expectedReturns: 5,
  duration: 10,
};

const InvestmentForm = () => {
  const [fromValues, setFormValues] = useState(initialFormValues);
  return (
    <section id="user-input">
      <form aria-label="Investment form">
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">Initial Investment</label>
            <input
              id="initialInvestment"
              type="number"
              required
              value={fromValues.intialInvestment}
            />
          </p>
          <p>
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input
              id="annualInvestment"
              type="number"
              required
              value={fromValues.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturns">Expected Returns</label>
            <input
              id="expectedReturns"
              type="number"
              required
              value={fromValues.expectedReturns}
            />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              type="number"
              required
              value={fromValues.duration}
            />
          </p>
        </div>
      </form>
    </section>
  );
};

export default InvestmentForm;
