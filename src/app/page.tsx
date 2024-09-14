import Link from "next/link";
import {notes} from "@/app/components/NoteListPanel";

export default function Home() {
    return (
        <main className="h-svh flex items-center justify-center">
            <Link href={notes[0].href ?? '/'} className="border rounded-md px-3 py-1.5" prefetch>Login</Link>
        </main>
    );
}
