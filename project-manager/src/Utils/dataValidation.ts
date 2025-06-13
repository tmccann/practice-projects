// validate data
export const validateTextInput = (
  ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
) => {
  const element = ref.current;
  if (!element) return null;
  const val = element.value;
  return val.length >= 4 ? val : null;
};
export const validateDateInput = (ref: React.RefObject<HTMLInputElement>) => {
  const dateElement = ref.current;
  if (!dateElement) return null;
  const val = dateElement.value;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const enteredDate = new Date(val);
  return enteredDate >= today ? val : null;
};
