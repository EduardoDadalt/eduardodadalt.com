"use client";

import { fileFromPathname } from "@/content/files";
import { usePathname } from "next/navigation";

export default function useActiveFile() {
  return fileFromPathname(usePathname());
}
