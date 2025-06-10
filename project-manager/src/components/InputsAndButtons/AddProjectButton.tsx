type ProjectButton = {
  children: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const classes =
  "bg-stone-700 text-stone-400  hover:bg-stone-600  hover:text-stone-100 py-2 px-4 rounded-md ";

export const AddProjectButton = ({
  onClick,
  children,
  ...props
}: ProjectButton) => {
  return (
    <button className={classes} {...props} onClick={onClick}>
      {children}
    </button>
  );
};
