import {ReactNode} from "react";

export default function NoteEditorControl({children, className}: { children: ReactNode, className?: string }) {
    return <div className={`shadow w-auto inline-flex rounded-md px-3 py-1.5 ${className}`}>{children}</div>
}