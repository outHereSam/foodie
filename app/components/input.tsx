import clsx from "clsx";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={clsx(
          "block bg-neutral-100 dark:bg-neutral-700 rounded-md outline-none px-2 py-1.5 border border-transparent focus:border-sky-600",
          className,
        )}
      />
    );
  },
);

export { Input };
