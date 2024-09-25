import Link from "next/link";
import { notes } from "@/components/note/list/NoteListPanel";
import {
  FolderIcon,
  HomeIcon,
  InboxStackIcon,
  PlusIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { SidebarIcon } from "lucide-react";
import Button from "@/components/ui/Button";

const navigation = [
  {
    icon: "HomeIcon",
    label: "Dashboard",
    href: "/dashboard",
    level: "main",
  },
  {
    icon: "StarIcon",
    label: "Starred",
    href: "/starred",
    level: "main",
  },
  {
    icon: "InboxStackIcon",
    label: "Archive",
    href: "/archive",
    level: "main",
  },
  {
    icon: "TrashIcon",
    label: "Deleted",
    href: "/deleted",
    level: "main",
  },
  {
    icon: "FolderIcon",
    label: "All Notes",
    href: "/all-notes",
    level: "vault",
  },
  {
    icon: "FolderIcon",
    label: "Articles",
    href: "/articles",
    level: "vault",
  },
  {
    icon: "FolderIcon",
    label: "Recipes",
    href: "/recipes",
    level: "vault",
  },
  {
    icon: "FolderIcon",
    label: "Inspiration",
    href: "/inspiration",
    level: "vault",
  },
  {
    icon: "FolderIcon",
    label: "Workouts",
    href: "/workouts",
    level: "vault",
  },
  {
    icon: "FolderIcon",
    label: "Content Ideas",
    href: "/content-ideas",
    level: "vault",
  },
];

export default function Sidebar() {
  return (
    <aside className="h-full space-y-4 overflow-y-auto overflow-x-hidden bg-muted px-4 py-3 pt-6">
      <div>
        <Button>
          <SidebarIcon className="size-5 shrink-0 stroke-2 text-muted-foreground" />
        </Button>
      </div>

      <ul>
        {navigation
          .filter((item) => item.level === "main")
          .map((item, index) => (
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
                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border bg-neutral-200 text-sm text-muted-foreground">
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

      <div className="space-y-2">
        <h3 className="text-xs text-muted-foreground">My vault</h3>

        <ul>
          {navigation
            .filter((item) => item.level === "vault")
            .map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between gap-4 rounded-lg p-3 transition hover:bg-neutral-200"
                >
                  <div className="inline-flex items-center gap-2">
                    <FolderIcon className="size-5 shrink-0 text-blue-600" />
                    <span className="flex-1">{item.label}</span>
                  </div>

                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border bg-neutral-200 text-sm text-muted-foreground">
                    {item.href.includes("all-notes") && notes.length}
                    {item.href.includes("articles") &&
                      notes.filter((note) => note.assigned.includes("articles"))
                        .length}
                  </span>
                </Link>
              </li>
            ))}

          <li>
            <Link
              href="/"
              className="flex items-center justify-between gap-4 rounded-lg p-3 transition hover:bg-neutral-200"
            >
              <div className="inline-flex items-center gap-2">
                <PlusIcon className="size-5 shrink-0 text-blue-600" />
                <span className="flex-1">Folder</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
