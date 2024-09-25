import Link from "next/link";
import { notes } from "@/components/note/list/NoteListPanel";
import {
  HomeIcon,
  InboxStackIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    icon: "HomeIcon",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: "StarIcon",
    label: "Starred",
    href: "/starred",
  },
  {
    icon: "InboxStackIcon",
    label: "Archive",
    href: "/archive",
  },
  {
    icon: "TrashIcon",
    label: "Deleted",
    href: "/deleted",
  },
];

export default function Sidebar() {
  return (
    <aside className="h-full overflow-y-auto overflow-x-hidden bg-neutral-50 px-2 py-3 pt-16">
      <ul>
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex justify-between gap-4 rounded-lg p-3 transition hover:bg-neutral-200"
            >
              <div className="inline-flex items-center gap-2">
                {item.icon === "HomeIcon" && (
                  <HomeIcon className="size-5 shrink-0" />
                )}
                {item.icon === "StarIcon" && (
                  <StarIcon className="size-5 shrink-0 text-yellow-500" />
                )}
                {item.icon === "InboxStackIcon" && (
                  <InboxStackIcon className="size-5 shrink-0 text-green-600" />
                )}
                {item.icon === "TrashIcon" && (
                  <TrashIcon className="size-5 shrink-0 text-red-600" />
                )}
                <span className="flex-1">{item.label}</span>
              </div>

              {item.href !== "/" && item.href !== "/dashboard" && (
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm text-muted-foreground">
                  {item.href.includes("starred") &&
                    notes.filter((note) => note.starred).length}
                  {item.href.includes("archive") &&
                    notes.filter((note) => note.archived).length}
                  {item.href.includes("deleted") &&
                    notes.filter((note) => note.deleted).length}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
