import {
  DownloadButtonNativeLinkRSC,
  DownloadButtonNextLinkRSC,
} from "./components/download-buttons-rsc";

export default function Home() {
  return (
    <div className="space-y-4 m-4">
      <DownloadButtonNativeLinkRSC />
      <DownloadButtonNextLinkRSC />
    </div>
  );
}
