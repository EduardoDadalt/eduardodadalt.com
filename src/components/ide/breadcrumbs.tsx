import type { FileId } from "@/content/files";
import FileIcon from "./file-icon";

export default function Breadcrumbs({ id, name }: { id: FileId; name: string }) {
  return (
    <div className="sticky top-0 z-10 flex h-[26px] items-center gap-1.5 border-b border-line bg-editor px-5 text-xs text-dim">
      eduardo-dadalt <span aria-hidden>›</span> <FileIcon id={id} /> {name}
    </div>
  );
}
