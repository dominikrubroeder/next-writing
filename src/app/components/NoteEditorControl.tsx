import { ReactNode } from "react";

export default function NoteEditorControl({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex w-auto rounded-md px-3 py-1.5 shadow ${className}`}
    >
      {children}
    </div>
  );
}
