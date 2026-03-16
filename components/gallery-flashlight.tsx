"use client";

import React from "react";
import { motion } from "framer-motion";

interface GalleryFlashlightProps {
  images?: string[];
  backgroundColor?: string;
  hintText?: string;
}

const GalleryFlashlight: React.FC<GalleryFlashlightProps> = ({
  images = [
    "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80",
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80",
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&q=80",
    "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=400&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80",
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  ],
  backgroundColor = "#000000",
  hintText = "GALERIE VR HARMONIE",
}) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.97 }}
            className="aspect-square bg-neutral-900 rounded-lg overflow-hidden relative"
          >
            <img
              src={img}
              alt={`Art ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-white/15" />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-neutral-500 font-mono text-xs md:text-sm tracking-widest text-center">
        {hintText}
      </div>
    </div>
  );
};

export default GalleryFlashlight;

