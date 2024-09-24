import Link from "next/link";
import { notes } from "@/app/components/NoteListPanel";

export default function Home() {
  return (
    <main className="flex h-svh items-center justify-center">
      <Link
        href={notes[0].href ?? "/"}
        className="invisible animate-fade-up rounded-md border px-3 py-1.5 opacity-0"
        prefetch
      >
        Login
      </Link>
    </main>
  );
}
