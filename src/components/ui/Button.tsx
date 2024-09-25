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
  animate,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  prefetch?: boolean;
  animate?: boolean;
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
        "rounded-md border px-3 py-1.5 hover:bg-neutral-50",
        animate && "invisible animate-fade-up opacity-0",
        className,
      )}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
