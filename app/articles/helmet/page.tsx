import { permanentRedirect } from "next/navigation";

export default function LegacyHelmetPage() {
  permanentRedirect("/life/helmet");
}
