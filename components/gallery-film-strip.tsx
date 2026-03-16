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
  backgroundColor = "#f0f0f0",
  archiveText = "Archive toiture",
  figurePrefix = "FIG.",
  isoText = "ISO 400",
  scrollHeight = "300vh",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: scrollHeight, backgroundColor }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 uppercase font-mono text-xs tracking-[1em] text-neutral-400">
          {archiveText}
        </div>

        <motion.div style={{ x }} className="flex gap-12 pl-[10vw]">
          {images.map((src, i) => (
            <div key={i} className="flex flex-col gap-4 shrink-0">
              <div className="relative w-[30vw] md:w-[22vw] aspect-3/4 overflow-hidden bg-neutral-300">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileHover={{ scale: 1 }}
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
              <div className="flex justify-between text-xs font-mono text-neutral-500">
                <span>
                  {figurePrefix} {i + 1}
                </span>
                <span>{isoText}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-12 w-full flex justify-center">
          <div className="h-1 w-64 bg-neutral-300 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilmStrip;

