import NoteEditorControl from "@/components/note/editor/NoteEditorControl";
import NoteEditorComponent from "@/components/note/editor/NoteEditorComponent";
import { notes } from "@/components/note/list/NoteListPanel";

export default function NotePage({ params }: { params: { slug: string } }) {
  const activeNoteId = Number(
    params.slug.split("-")[params.slug.split("-").length - 1],
  );
  const activeNote = notes[activeNoteId - 1];

  return (
    <div className="relative overflow-y-auto overflow-x-hidden px-4">
      <div className="sticky top-0 flex justify-between gap-4 bg-background py-4">
        <div className="space-x-2">
          <NoteEditorControl>Playfair Display</NoteEditorControl>

          <NoteEditorControl>16px</NoteEditorControl>

          <NoteEditorControl>B U I S</NoteEditorControl>

          <NoteEditorControl>Alignment</NoteEditorControl>
        </div>

        <div className="space-x-2">
          <NoteEditorControl>Foto</NoteEditorControl>

          <NoteEditorControl>Link</NoteEditorControl>
        </div>

        <div className="space-x-2">
          <NoteEditorControl>Share</NoteEditorControl>
        </div>
      </div>

      <div className="rounded-md bg-neutral-100 px-3 py-1.5 text-center text-xs text-neutral-500">
        Last edited
      </div>

      <div className="mx-auto max-w-screen-md space-y-8 py-12">
        <div className="h-[35svh] w-full rounded-xl bg-neutral-100" />
        {activeNote.body.map((component, index) => (
          <NoteEditorComponent key={index} component={component} />
        ))}
      </div>

      <div className="sticky bottom-0 left-0 right-0 h-12 w-full bg-gradient-to-b from-white/10 to-white" />
    </div>
  );
}
