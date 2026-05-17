import { IOS_APP_STORE_URL } from "../lib/app-links";

const LOGO_IMAGE = "/lovable-uploads/dbf79a37-c86d-49c9-af90-9fe7b44058fc.jpg";

type AppStoreCtaProps = {
  buttonLabel?: string;
};

export default function AppStoreCta({
  buttonLabel = "Download on the App Store",
}: AppStoreCtaProps) {
  return (
    <div className="rounded-2xl border border-[#083b6c]/10 bg-[#e6f9ff]/60 p-6 text-center space-y-4">
      <img src={LOGO_IMAGE} alt="ShoreDrop" className="w-12 h-12 mx-auto rounded-lg" />
      <p className="text-xl font-semibold text-[#083b6c]">ShoreDrop</p>
      <a
        href={IOS_APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-[#083b6c] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#062a4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#083b6c] focus-visible:ring-offset-2"
      >
        {buttonLabel}
      </a>
    </div>
  );
}
