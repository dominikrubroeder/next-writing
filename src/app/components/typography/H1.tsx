import { ReactNode } from "react";

export default function H1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h1 className={`px-8 text-3xl ${className}`}>{children}</h1>;
}
