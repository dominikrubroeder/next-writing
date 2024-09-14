import {ReactNode} from "react";

export default function P({children, className}: { children: ReactNode, className?: string }) {
    return <p className={`text-base px-8 text-neutral-500 ${className}`}>{children}</p>
}