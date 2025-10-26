import TabsWidget from "./components/TabsWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#373E44] to-[#191B1F] flex flex-col lg:flex-row items-center justify-center px-10 lg:px-24 py-16 gap-16">

      {/* Left half empty */}
      <div className="hidden lg:flex flex-1"></div>

      {/* Right half - widgets */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        {/* Tabs Widget */}
        <TabsWidget />

        {/* Line above GalleryWidget */}
        <div
          className="rounded-[2.46px] my-4"
          style={{
            width: "612px",
            height: "4px",
            background: "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
            opacity: 1,
          }}
        />

        {/* Gallery Widget */}
        <GalleryWidget />

        {/* Line below GalleryWidget */}
        <div
          className="rounded-[2.46px] my-4"
          style={{
            width: "612px",
            height: "4px",
            background: "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
