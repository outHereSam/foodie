import clsx from "clsx";
import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, children, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx("bg-sky-600 py-1.5 px-4 rounded-full", className)}
    >
      {children}
    </button>
  );
});

export { Button };
