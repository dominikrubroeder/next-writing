import { notes } from "@/components/NoteListPanel";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex h-svh items-center justify-center">
      <Button href={`/note/${notes[0].id}`} prefetch>
        Login
      </Button>
    </main>
  );
}
