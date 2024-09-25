import NoteEditorComponent from "@/components/note/editor/NoteEditorComponent";
import { notes } from "@/components/note/list/NoteListPanel";
import Button from "@/components/ui/Button";

export default function NotePage({ params }: { params: { slug: string } }) {
  const activeNoteId = Number(
    params.slug.split("-")[params.slug.split("-").length - 1],
  );
  const activeNote = notes[activeNoteId - 1];

  return (
    <div className="relative overflow-y-auto overflow-x-hidden px-4">
      <div className="sticky top-0 flex justify-between gap-4 bg-background py-4">
        <div className="space-x-2">
          <Button>Playfair Display</Button>

          <Button>16px</Button>

          <Button>B U I S</Button>

          <Button>Alignment</Button>
        </div>

        <div className="space-x-2">
          <Button>Foto</Button>

          <Button>Link</Button>
        </div>

        <div className="space-x-2">
          <Button>Share</Button>
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
