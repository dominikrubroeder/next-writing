import NotePanel from "@/app/components/NotePanel";
import NoteNavigationPanel from "@/app/components/NoteNavigationPanel";
import NoteListPanel from "@/app/components/NoteListPanel";

export default function Home() {
    return (
        <main className="grid h-screen grid-cols-[200px_320px_1fr]">
            <NoteNavigationPanel/>
            <NoteListPanel/>
            <NotePanel/>
        </main>
    );
}
