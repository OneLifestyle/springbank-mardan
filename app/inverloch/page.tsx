import { TownGuidePage } from "@/components/town-guide-page";
import { buildTownGuideMetadata, townGuides } from "@/lib/town-guides";

const guide = townGuides["inverloch"];

export const metadata = buildTownGuideMetadata(guide);

export default function Page() {
  return <TownGuidePage guide={guide} />;
}
