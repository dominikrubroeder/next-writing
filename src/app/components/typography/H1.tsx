import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function H1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h1 className={cn("px-8 text-3xl", className)}>{children}</h1>;
}
