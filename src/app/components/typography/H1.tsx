import {ReactNode} from "react";

export default function H1({children, className}: { children: ReactNode, className?: string }) {
    return <h1 className={`text-3xl px-8 ${className}`}>{children}</h1>
}