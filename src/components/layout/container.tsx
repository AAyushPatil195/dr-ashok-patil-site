import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  const classes = ["site-container", className].filter(Boolean).join(" ");

  return <div className={classes} {...props} />;
}
