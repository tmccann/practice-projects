const NewProject = () => {
  // still to work on logic
  const handleSubmit = () => {};
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
        <p className="flex flex-col gap-1 my-4">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className=" border-b-2 border-stone-400 bg-stone-200 rounded-sm p-1 focus:outline-none focus:border-stone-700"
            type="text"
            data-testid="title"
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className=" border-b-2 border-stone-400 bg-stone-200 rounded-sm focus:outline-none focus:border-stone-700"
            data-testid="description"
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            className=" border-b-2 border-stone-400 bg-stone-200 rounded-sm focus:outline-none focus:border-stone-700"
            type="date"
            data-testid="date"
          />
        </p>
      </form>
    </div>
  );
};

export default NewProject;
