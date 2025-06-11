const SelectedProject = () => {
  return (
    <div className="w-[60%] border-2 border-gray-500 py-16 px-12">
      <header>
        <div className="flex justify-between pb-2">
          <h1 className="text-3xl font-bold uppercase text-stone-600">test</h1>
          <button
            type="button"
            className="text-stone-600 hover:text-stone-900 hover:font-bold cursor-pointer"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-400 pb-2">July 12, 2025</p>
        <p className="pb-2 mb-2 border-b-2 border-stone-400">
          Description will be here
        </p>
      </header>
      <section>
        <h2 className="pb-2 font-bold text-2xl text-stone-600">Task</h2>

        <div className="flex gap-4 items-center pb-2">
          <label htmlFor="add-task" className="sr-only">
            Add Task
          </label>
          <input
            className="bg-stone-200 rounded-sm"
            type="text"
            id="add-task"
            placeholder="New task..."
          />
          <button
            type="button"
            className="text-stone-600 hover:text-stone-900 hover:font-bold cursor-pointer"
          >
            Add Task
          </button>
        </div>
        <p>This project does not have any tasks yet.</p>
      </section>
    </div>
  );
};
export default SelectedProject;
