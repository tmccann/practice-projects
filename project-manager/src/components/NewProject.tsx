import { useRef, useState } from "react";
import { Input } from "./InputsAndButtons/Input";
import { validateDateInput, validateTextInput } from "../Utils/dataValidation";

export type DataProps = {
  title: string;
  description: string;
  date: string;
};

type NewProjectProps = {
  cancel: () => void;
  handleSubmit: (data: DataProps) => void;
};
const NewProject = ({ cancel, handleSubmit }: NewProjectProps) => {
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    date: false,
  });
  const title = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  // handle errors
  const handleFormValidation = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTitle = validateTextInput(title);
    const enteredDescription = validateTextInput(description);
    const eneteredDate = validateDateInput(date);

    if (!enteredTitle || !enteredDescription || !eneteredDate) {
      const newErrors = {
        title: !enteredTitle,
        description: !enteredDescription,
        date: !eneteredDate,
      };
      setErrors(newErrors);
      setErrorDisplay(true);
    } else {
      const data = {
        title: enteredTitle,
        description: enteredDescription,
        date: eneteredDate,
      };
      handleSubmit(data);
    }
  };
  // pass data to fron end

  return (
    <div className=" p-16 w-[60%]">
      <form onSubmit={handleFormValidation}>
        <div className="flex items-center justify-end gap-4">
          <button onClick={cancel}>Cancel</button>
          <button
            type="submit"
            className="bg-stone-800 text-stone-50 py-2 px-4 rounded-md"
          >
            Save
          </button>
        </div>
        <Input label="Title" id="title" type="text" ref={title} />
        <Input
          label="Description"
          id="description"
          ref={description}
          textarea
        />
        <Input label="Date" id="date" type="date" ref={date} />
      </form>
      {errorDisplay && (
        <p>
          submited project form has errors
          {errors.title && <span> title is to short </span>}
          {errors.description && <span> description is to short</span>}
          {errors.date && <span> The date must be today or later.</span>}
        </p>
      )}
    </div>
  );
};

export default NewProject;
