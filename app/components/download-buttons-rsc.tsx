import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadButtonNativeLinkRSC() {
  return (
    <Button size="sm" className="flex gap-2 border-dashed">
      <a href="/api/download">Download with native link</a>
      <Download className="h-4 w-4" />
    </Button>
  );
}
