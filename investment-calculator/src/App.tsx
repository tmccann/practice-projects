import { useState } from "react";
import type { FormValueProps } from "./components/InvestmentForm";
import InvestmentForm from "./components/InvestmentForm";
import { calculateInvestmentResults } from "./util/investment";
import Result from "./components/Result";

export const initialFormValues: FormValueProps = {
  initialInvestment: 100,
  annualInvestment: 10,
  expectedReturns: 5,
  duration: 10,
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const valueAsNumber = Number(value);
    // only used as fail safe this should never work as input min value is 0 and '-' key not accepted
    const newValue = valueAsNumber < 0 ? 0 : valueAsNumber;
    setFormValues((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };
  return (
    <main>
      <InvestmentForm onHandleChange={onHandleChange} formValues={formValues} />
      <Result tableData={calculateInvestmentResults(formValues)} />
    </main>
  );
};

export default App;
