import {ReactNode} from "react";

export default function P({children, className}: { children: ReactNode, className?: string }) {
    return <p className={`text-base text-neutral-500 ${className}`}>{children}</p>
}