"use client";

import { ReactNode, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Button({
  children,
  className,
  onClick,
  href,
  prefetch,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  prefetch?: boolean;
}) {
  const router = useRouter();

  const onClickHandler = useCallback(() => {
    if (prefetch && href) router.prefetch(href);
    if (href) router.push(href, { scroll: false });
    if (onClick) onClick();
  }, [prefetch, href, router, onClick]);

  return (
    <button
      className={cn(
        "invisible animate-fade-up rounded-md border px-3 py-1.5 opacity-0 hover:bg-neutral-50",
        className,
      )}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
