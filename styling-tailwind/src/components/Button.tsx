const Button = ({ children, ...props }: any) => {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
