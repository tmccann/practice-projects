export type FormValueProps = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturns: number;
  duration: number;
};

type InvestmentFormProps = {
  formValues: FormValueProps;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InvestmentForm = ({
  formValues,
  onHandleChange,
}: InvestmentFormProps) => {
  const { initialInvestment, annualInvestment, expectedReturns, duration } =
    formValues;

  return (
    <section id="user-input">
      <form aria-label="Investment form">
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">Initial Investment</label>
            <input
              id="initialInvestment"
              type="number"
              min={0}
              required
              value={initialInvestment}
              onChange={(e) => onHandleChange(e)}
            />
          </p>
          <p>
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input
              id="annualInvestment"
              type="number"
              min={0}
              required
              value={annualInvestment}
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
              min={0}
              required
              value={expectedReturns}
              onChange={(e) => onHandleChange(e)}
            />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              type="number"
              min={0}
              required
              value={duration}
              onChange={(e) => onHandleChange(e)}
            />
          </p>
        </div>
      </form>
    </section>
  );
};

export default InvestmentForm;
