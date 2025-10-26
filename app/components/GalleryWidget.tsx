"use client";

import { useRef, useState } from "react";
import { HelpCircle, ArrowLeftIcon, ArrowRightIcon, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function GalleryWidget() {
  // Initial gallery images
  const [images, setImages] = useState<string[]>([
    "/Images/image.jpg",
    "/Images/image.jpg",
    "/Images/image.jpg",
    "/Images/image.jpg",
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const SCROLL_AMOUNT = 206;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });

  // Trigger hidden file input
  const handleAddImageClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageURL]);

      // Scroll to the end to show the new image
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      }, 100);
    }

    // Reset input so same file can be selected again if needed
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // --- Six Box Grid Icon ---
  const SixBoxGridIcon = () => (
    <svg width="24" height="30.68" viewBox="0 0 24 31" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 1 }}>
      <rect x="0" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
      <rect x="10.312" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
      <rect x="0" y="10.188" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
      <rect x="10.312" y="10.188" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
      <rect x="0" y="20.376" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
      <rect x="10.312" y="20.376" width="9.312" height="9.312" rx="1.16" ry="1.16" fill="#4A4E54" />
    </svg>
  );

  return (
    <div
      className="relative rounded-[16px] p-6 text-white"
      style={{
        width: "720px",
        minHeight: "316px",
        backgroundColor: "#363C43",
        boxShadow: "5px 5px 3px #00000066",
      }}
    >
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Top Bar / Header Section */}
      <div className="flex items-center justify-between h-auto">
        {/* Help Icon + Gallery Label */}
        <div className="flex items-center gap-4">
          <div
            className="flex items-center justify-center rounded-full cursor-help mr-1"
            style={{
              width: "24px",
              height: "24px",
              background: "linear-gradient(327.89deg, #4A4E54 -1.73%, #A3ADBA 89.26%)",
            }}
          >
            <HelpCircle size={16} color="#fff" strokeWidth={2} />
          </div>
          <div className="flex items-center justify-center w-[149px] h-[62px] bg-[#171717] rounded-[20px] shadow-[inset_0px_2px_5px_1px_#00000040] px-2">
            <div className="text-white font-medium text-lg">Gallery</div>
          </div>
        </div>

        {/* +ADD IMAGE and Nav Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleAddImageClick}
            className="flex items-center w-[131px] h-[46px] px-4 py-2 gap-1 rounded-[104px] transition-colors hover:bg-[#FFFFFF12]"
            style={{
              background: "#FFFFFF08",
              backdropFilter: "blur(104.56px)",
              boxShadow:
                "inset 0px 3.26px 3.26px 0px #FFFFFF26, inset 0px 0px 48.91px 0px #FFFFFF0D, 9px 10px 7.1px 0px #00000066, -0.5px -0.5px 6.9px 0px #FFFFFF40",
            }}
          >
            <Plus size={18} color="#A3ADBA" />
            <span className="text-sm font-medium text-[#ffffff] uppercase">ADD IMAGE</span>
          </button>

          <div className="flex gap-2">
            <button
              className="w-[45px] h-[45px] rounded-full bg-[#222328] flex items-center justify-center hover:bg-[#32363b] transition-colors"
              onClick={scrollLeft}
            >
              <ArrowLeftIcon size={20} color="#6F787C" />
            </button>
            <button
              className="w-[45px] h-[45px] rounded-full bg-[#222328] flex items-center justify-center hover:bg-[#32363b] transition-colors"
              onClick={scrollRight}
            >
              <ArrowRightIcon size={20} color="#6F787C" />
            </button>
          </div>
        </div>
      </div>

      {/* Six Box Icon + Scrollable Images */}
      <div className="flex items-center mt-8 gap-6">
        {/* Six Box Icon */}
        <div className="flex-shrink-0">
          <SixBoxGridIcon />
        </div>

        {/* Scrollable Images Container */}
        <div className="relative">
          <div ref={scrollRef} className="flex gap-4 overflow-hidden" style={{ width: "622px" }}>
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="w-[190px] h-[179px] rounded-[24px] bg-[#00000033] flex-shrink-0 cursor-pointer"
                whileHover={{
                  scale: 1.11,
                  rotate: -3,
                  transition: { duration: 0.3, ease: "easeOut" },
                  boxShadow: "10px 10px 20px #00000088",
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-100 ease-out rounded-[24px]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}   