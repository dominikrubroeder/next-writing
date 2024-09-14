import {ReactNode} from "react";

export default function H2({children, className}: { children: ReactNode, className?: string }) {
    return <h2 className={`text-2xl px-8 ${className}`}>{children}</h2>
}