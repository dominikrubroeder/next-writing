import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function NoteEditorControl({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex w-auto rounded-md px-3 py-1.5 shadow",
        className,
      )}
    >
      {children}
    </div>
  );
}
