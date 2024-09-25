import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function H2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={cn("px-8 text-2xl", className)}>{children}</h2>;
}
