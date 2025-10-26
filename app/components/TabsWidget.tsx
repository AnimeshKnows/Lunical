"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";

// --- Data Definitions ---
type TabKey = "about" | "experiences" | "recommended";

const tabs: { key: TabKey; label: string }[] = [
  { key: "about", label: "About Me" },
  { key: "experiences", label: "Experiences" },
  { key: "recommended", label: "Recommended" },
];

// --- Six Box Grid Icon ---
const SixBoxGridIcon = () => (
  <svg
    width="24"
    height="30.68"
    viewBox="0 0 24 31"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 1 }}
  >
    <rect x="0" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
    <rect x="10.312" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
    <rect x="0" y="10.188" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
    <rect x="10.312" y="10.188" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
    <rect x="0" y="20.376" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
    <rect x="10.312" y="20.376" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
  </svg>
);

// --- Static Content ---
const StaticContentDisplay = () => (
  <div className="text-[#969696] font-sans text-[20px] leading-[1.25]">
    <p>
      Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this
      awesome company for 3 years now.
    </p>
    <p className="mt-2">
      I was born and raised in Albany, NY & have been living in Santa Carla for the past
      10 years with my wife Tiffany and my 4 year old twin daughters — Emma and Ella.
      Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. 
      This is a...
    </p>
  </div>
);

// --- Main Component ---
export default function TabsWidget() {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  // Calculate sliding background styles
  const activeIndex = tabs.findIndex((t) => t.key === activeTab);
  const slideWidth = `calc(${100 / tabs.length}% - 8px)`;
  const slideLeft = `calc(${(activeIndex * 100) / tabs.length}% + 4px)`;

  return (
    <div
      className="relative rounded-[18.89px] backdrop-blur-md p-6"
      style={{
        width: "720px",
        height: "316px",
        backgroundColor: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
      }}
    >
      {/* Header: Help Icon + Tabs */}
      <div className="flex items-center gap-4 mb-6">
        {/* Help Icon */}
        <div
          className="flex items-center justify-center rounded-full cursor-help"
          style={{
            width: "24px",
            height: "24px",
            background: "linear-gradient(327.89deg, #4A4E54 -1.73%, #A3ADBA 89.26%)",
          }}
        >
          <HelpCircle size={16} color="#fff" strokeWidth={2} />
        </div>

        {/* Pill Box */}
        <div
          className="relative flex gap-[6px] items-center justify-between rounded-[23px] px-1"
          style={{
            width: "614px",
            height: "62px",
            background: "#171717",
            boxShadow: "inset 0px 4.96px 12.4px 2.48px #00000040",
          }}
        >
          {/* Sliding Background + Shadow */}
          <div
            className="absolute h-[calc(100%-8px)] rounded-2xl bg-[#27262d] transition-all duration-300 ease-out flex items-end"
            style={{
              width: slideWidth,
              left: slideLeft,
              zIndex: 0,
            }}
          >
            <div
              className="absolute w-full h-4 bottom-[-8px] rounded-t-2xl"
              style={{
                background: "rgba(0,0,0,0.7)",
                filter: "blur(10px)",
                zIndex: -1,
              }}
            />
          </div>

          {/* Buttons */}
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={activeTab === tab.key}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "16.12px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
              className={`relative flex-1 h-[49px] rounded-[16px] px-6 py-2 transition-colors duration-300 z-10 flex items-center justify-center ${
                activeTab === tab.key
                  ? "text-white"
                  : "text-[#999999] hover:text-white hover:before:scale-x-100 relative before:absolute before:inset-0 before:bg-white/10 before:rounded-2xl before:transform before:origin-left before:scale-x-0 before:transition-transform before:duration-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex gap-4 relative">
        {/* Six Box Icon */}
        <div className="flex-shrink-0 mt-12">
          <SixBoxGridIcon />
        </div>

        {/* Static Content */}
        <div className="flex-1">
          <StaticContentDisplay />
        </div>

        {/* Fake Scrollbar */}
        <div
          className="rounded-[8px]"
          style={{
            width: "8px",
            height: "64px",
            background: "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)",
            boxShadow: "4px 4px 4.9px 0px #00000040",
          }}
        />
      </div>
    </div>
  );
}