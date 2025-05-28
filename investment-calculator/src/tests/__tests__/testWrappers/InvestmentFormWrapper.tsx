import { useState } from "react";
import { initialFormValues } from "../../../App";
import InvestmentForm from "../../../components/InvestmentForm";

const InvestmentFormWrapper = () => {
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
    <>
      <InvestmentForm onHandleChange={onHandleChange} formValues={formValues} />
    </>
  );
};

export default InvestmentFormWrapper;
