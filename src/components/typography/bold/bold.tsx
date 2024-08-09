import React from "react";
import { cn } from "../../../lib/cn";
import { makeClassName } from "../../../core/all";
import { BoldProps } from "./type";

export function Bold({
  children,
  className,
  ...props
}: React.PropsWithChildren<BoldProps>) {
  return (
    <b className={cn(makeClassName(`bold`), className)} {...props}>
      {children}
    </b>
  );
}

Bold.displayName = "Bold";
