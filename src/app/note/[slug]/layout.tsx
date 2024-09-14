import NoteNavigationPanel from "@/app/components/NoteNavigationPanel";
import NoteListPanel from "@/app/components/NoteListPanel";
import {ReactNode} from "react";

export default function NoteLayout({children}: { children: ReactNode }) {
    return (
        <main className="grid h-screen grid-cols-[200px_320px_1fr]">
            <NoteNavigationPanel/>
            <NoteListPanel activeNote={1}/>
            {children}
        </main>
    );
}
