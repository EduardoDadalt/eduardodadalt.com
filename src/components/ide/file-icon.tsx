import { FILES, type FileId } from "@/content/files";

export default function FileIcon({ id }: { id: FileId }) {
  const { icon, color } = FILES[id];
  return (
    <span
      aria-hidden
      className="w-4 shrink-0 text-center text-[11px] font-extrabold"
      style={{ color }}
    >
      {icon}
    </span>
  );
}
