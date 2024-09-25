import Link from "next/link";
import { H2, P } from "@/components/typography";
import { INote } from "@/components/note/editor/NoteEditorComponent";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { PencilSquareIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { ListIcon } from "lucide-react";

export const notes: INote[] = [
  {
    id: 1,
    title: "The Land of the rising sun: The Enchanting Beauty of Japan",
    description: "A short description, that can also go into two lines",
    body: [
      {
        content: "The Land of the rising sun: The Enchanting Beauty of Japan",
        tag: "h1",
      },
      {
        content:
          "Japan, often referred to as the &quot;Land of the Rising Sun&quot;, is a country that effortlessly blends ancient traditions with cutting-edge technology, creating a unique tapestry of beauty and innovation. From serene temples nestled among cherry blossoms to bustling city streets adorned with neon lights, Japan offers an enchanting experience for travelers seeking a harmonious blend of old and new. Join us as we embark on a virtual journey to uncover the captivating beauty of this mesmerizing country.",
        tag: "p",
      },
      {
        content: "The Land of the rising sun: The Enchanting Beauty of Japan",
        tag: "h2",
      },
    ],
    lastEdit: "2024-09-18",
    previewImage: "path/to/image.jpg",
    starred: true,
    archived: false,
    deleted: false,
    assigned: [],
  },
  {
    id: 2,
    title: "The Land of the rising sun: The Enchanting Beauty of Japan",
    description: "A short description, that can also go into two lines",
    body: [
      {
        content: "The Land of the rising sun: The Enchanting Beauty of Japan",
        tag: "h1",
      },
      {
        content:
          "Japan, often referred to as the &quot;Land of the Rising Sun&quot;, is a country that effortlessly blends ancient traditions with cutting-edge technology, creating a unique tapestry of beauty and innovation. From serene temples nestled among cherry blossoms to bustling city streets adorned with neon lights, Japan offers an enchanting experience for travelers seeking a harmonious blend of old and new. Join us as we embark on a virtual journey to uncover the captivating beauty of this mesmerizing country.",
        tag: "p",
      },
      {
        content: "The Land of the rising sun: The Enchanting Beauty of Japan",
        tag: "h2",
      },
    ],
    lastEdit: "2024-09-14",
    previewImage: "path/to/image.jpg",
    starred: false,
    archived: true,
    deleted: false,
    assigned: [],
  },
  {
    id: 3,
    title: "The Land of the rising sun: The Enchanting Beauty of Japan",
    description: "A short description, that can also go into two lines",
    body: [
      {
        content: "The Land of the rising sun: The Enchanting Beauty of Japan",
        tag: "h1",
      },
      {
        content:
          "Japan, often referred to as the &quot;Land of the Rising Sun&quot;, is a country that effortlessly blends ancient traditions with cutting-edge technology, creating a unique tapestry of beauty and innovation. From serene temples nestled among cherry blossoms to bustling city streets adorned with neon lights, Japan offers an enchanting experience for travelers seeking a harmonious blend of old and new. Join us as we embark on a virtual journey to uncover the captivating beauty of this mesmerizing country.",
        tag: "p",
      },
      {
        content: "The Land of the rising sun: The Enchanting Beauty of Japan",
        tag: "h2",
      },
    ],
    lastEdit: "2024-09-14",
    previewImage: "path/to/image.jpg",
    starred: false,
    archived: false,
    deleted: true,
    assigned: [],
  },
];

export default function NoteListPanel({ activeNote }: { activeNote: number }) {
  return (
    <div className="h-full space-y-6 overflow-y-auto border-x px-6 py-6">
      <div className="flex items-center justify-between gap-2">
        <div>
          <Button>
            <PencilSquareIcon className="size-5 shrink-0" />
          </Button>
          <Button>
            <Squares2X2Icon className="size-5 shrink-0" />
          </Button>
          <Button>
            <ListIcon className="size-5 shrink-0" />
          </Button>
        </div>
        <div>Delete</div>
      </div>

      <div className="w-full rounded-md border py-1.5 pl-4 text-neutral-500">
        Search
      </div>

      <div className="sticky top-0 bg-white">2024</div>

      <ul className="-mx-3">
        {notes.map((note, index) => (
          <li key={note.id}>
            <Link
              href={`/note/${note.id}`}
              className={cn(
                "grid gap-1 rounded-md px-4 py-4 transition hover:bg-neutral-100",
                index === activeNote - 1 ? "bg-muted" : "bg-white",
              )}
              scroll={false}
              prefetch
            >
              <H2 className="px-0 text-base font-bold">{note.title}</H2>
              <P className="px-0 text-xs">Last edit: {note.lastEdit}</P>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
