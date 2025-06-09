import logo from "../assets/no-projects.png";

const NoProject = () => {
  return (
    <div className="w-2/3 px-8 py-16 text-center">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={logo}
        alt="clipboard and pen"
      />
      <h2 className=" text-2xl font-bold text-stone-500 py-4">
        No project selected
      </h2>
      <p className="font-bold text-stone-500 py-4">
        Select a project or get started with a new one
      </p>
      <button className="bg-stone-700 text-stone-400  hover:bg-stone-600  hover:text-stone-100 py-2 px-4 rounded-md ">
        Create new project
      </button>
    </div>
  );
};

export default NoProject;
