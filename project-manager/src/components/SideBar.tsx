const SideBar = () => {
  const handleNewProject = () => {
    // placeholder
  };
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900  md:w-72 rounded-tr-2xl">
      <h2 className="mb-8 text-stone-200 text-xl font-bold uppercase ">
        your projects
      </h2>

      <button
        onClick={handleNewProject}
        className="bg-stone-700 text-stone-400  hover:bg-stone-600  hover:text-stone-100 py-2 px-4 rounded-md "
      >
        + Add Project
      </button>
    </aside>
  );
};

export default SideBar;
