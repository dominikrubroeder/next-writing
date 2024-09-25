import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function P({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("px-8 text-base text-neutral-500", className)}>
      {children}
    </p>
  );
}
