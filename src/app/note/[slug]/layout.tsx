import { ReactNode } from "react";
import NoteListPanel from "@/app/components/NoteListPanel";
import NoteNavigationPanel from "@/app/components/NoteNavigationPanel";

export default function NoteLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: ReactNode;
}) {
  const activeNoteId = Number(
    params.slug.split("-")[params.slug.split("-").length - 1],
  );

  return (
    <main className="grid h-screen grid-cols-[200px_320px_1fr]">
      <NoteNavigationPanel />
      <NoteListPanel activeNote={activeNoteId} />
      {children}
    </main>
  );
}
