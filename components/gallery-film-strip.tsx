"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryFilmStripProps {
  images?: string[];
  backgroundColor?: string;
  archiveText?: string;
  figurePrefix?: string;
  isoText?: string;
  scrollHeight?: string;
}

const GalleryFilmStrip: React.FC<GalleryFilmStripProps> = ({
  images = [
    "/images/IMG_7472.jpeg",
    "/images/C085261D-4E94-4EE1-B4C5-C3703D8AB9A8.JPG",
    "/images/IMG_6137.jpeg",
    "/images/IMG_6185.jpeg",
    "/images/IMG_6187.jpeg",
    "/images/IMG_7394.jpeg",
    "/images/IMG_7463.jpeg",
    "/images/IMG_7468.jpeg",
  ],
  backgroundColor = "#000000",
  archiveText = "Archive toiture",
  figurePrefix = "FIG.",
  isoText = "ISO 400",
  scrollHeight = "350vh",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  // Une image par écran : 0% → -100% * (images.length - 1)
  const maxOffset = (images.length - 1) * -100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${maxOffset}%`]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: scrollHeight, backgroundColor }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mb-6 text-center uppercase font-mono text-[10px] tracking-[0.5em] text-neutral-400">
          {archiveText}
        </div>

        <motion.div
          style={{ x }}
          className="flex"
          // chaque image occupe 100% de la largeur de l’écran
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 shrink-0 w-screen px-6 md:px-12"
            >
              <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] overflow-hidden bg-neutral-300">
                <motion.img
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  src={src}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute left-2 top-0 bottom-0 w-2 flex flex-col justify-between py-2">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <div
                      key={j}
                      className="w-1.5 h-2 bg-white rounded-[1px]"
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-[10px] md:text-xs font-mono text-neutral-500 max-w-4xl mx-auto">
                <span>
                  {figurePrefix} {i + 1}
                </span>
                <span>{isoText}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryFilmStrip;


