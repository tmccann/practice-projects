import { useState } from "react";

export type FormValueProps = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturns: number;
  duration: number;
};
const initialFormValues: FormValueProps = {
  initialInvestment: 100,
  annualInvestment: 10,
  expectedReturns: 5,
  duration: 10,
};

const InvestmentForm = () => {
  const [fromValues, setFormValues] = useState(initialFormValues);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const valueAsNumber = Number(value);
    setFormValues((prev) => ({
      ...prev,
      [id]: valueAsNumber,
    }));
  };
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
              value={fromValues.initialInvestment}
              onChange={(e) => onHandleChange(e)}
            />
          </p>
          <p>
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input
              id="annualInvestment"
              type="number"
              required
              value={fromValues.annualInvestment}
              onChange={(e) => onHandleChange(e)}
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
              onChange={(e) => onHandleChange(e)}
            />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              type="number"
              required
              value={fromValues.duration}
              onChange={(e) => onHandleChange(e)}
            />
          </p>
        </div>
      </form>
    </section>
  );
};

export default InvestmentForm;
