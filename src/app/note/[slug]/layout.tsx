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
    <main className="grid h-screen grid-cols-[14rem_20rem_1fr]">
      <Sidebar />
      <NoteListPanel activeNote={activeNoteId} />
      {children}
    </main>
  );
}
