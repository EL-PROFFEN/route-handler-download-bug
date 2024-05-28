import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function DownloadButtonNativeLinkRSC() {
  return (
    <a
      href="/api/download"
      className="flex gap-2 border-dashed border p-2 items-center"
    >
      Download using native link (RSC) <Download className="h-4 w-4" />
    </a>
  );
}

export function DownloadButtonNextLinkRSC() {
  return (
    <Button asChild variant="outline">
      <Link href="/api/download" className="flex gap-2">
        Download using Next Link (RSC) <Download className="h-4 w-4" />
      </Link>
    </Button>
  );
}
