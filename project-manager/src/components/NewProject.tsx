import { useRef } from "react";
import { Input } from "./Inputs/Input";

const NewProject = () => {
  const title = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  // still to work on logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      title.current?.value,
      description.current?.value,
      date.current?.value
    );
  };
  return (
    <div className=" p-16 w-6/10">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-end gap-4">
          <button className="">Cancel</button>
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
    </div>
  );
};

export default NewProject;
