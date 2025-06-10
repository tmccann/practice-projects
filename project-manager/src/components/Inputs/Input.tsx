import React, { forwardRef } from "react";

type InputProps =
  | ({
      textarea: true;
      label: string;
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({
      textarea?: false;
      label: string;
    } & React.InputHTMLAttributes<HTMLInputElement>);

const classes =
  " border-b-2 border-stone-400 bg-stone-200 rounded-sm p-1 focus:outline-none focus:border-stone-700";

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => {
  const { label, textarea, id, ...rest } = props;
  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea
          id={id}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          data-testid={id}
          className={classes}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          ref={ref as React.Ref<HTMLInputElement>}
          data-testid={id}
          className={classes}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </p>
  );
});
