"use client";

import { usePathname } from "next/navigation";

export default function DocsBreadcrumb() {
    const path = usePathname().split("/").filter(Boolean);

    return (
        <div className="text-sm text-zinc-400 mb-4">
            Docs / {path.slice(1).join(" / ")}
        </div>
    );
}
