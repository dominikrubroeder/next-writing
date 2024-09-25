import { notes } from "@/components/note/list/NoteListPanel";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex h-svh items-center justify-center">
      <Button href={`/note/${notes[0].id}`} animate prefetch>
        Login
      </Button>
    </main>
  );
}
