import { ReactNode } from "react";
import NoteListPanel from "@/components/note/list/NoteListPanel";
import Sidebar from "@/components/ui/Sidebar";

export default function NoteLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: ReactNode;
}) {
  const activeNoteId = Number(params.slug);

  return (
    <main className="grid h-screen grid-cols-[200px_320px_1fr]">
      <Sidebar />
      <NoteListPanel activeNote={activeNoteId} />
      {children}
    </main>
  );
}
