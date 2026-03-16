"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Info, Download } from "lucide-react";

interface GalleryMosaicProps {
  images?: string[];
  backgroundColor?: string;
  viewText?: string;
  scrollSpeed1?: number;
  scrollSpeed2?: number;
  scrollSpeed3?: number;
}

const GalleryMosaic: React.FC<GalleryMosaicProps> = ({
  images = [
    "/images/IMG_7472.jpeg",
    "/images/C085261D-4E94-4EE1-B4C5-C3703D8AB9A8.JPG",
    "/images/DSC08774.jpg",
    "/images/IMG_6185.jpeg",
    "/images/IMG_7468.jpeg",
    "/images/DSC08773.jpg",
    "/images/DSC08772.jpg",
    "/images/IMG_7472.jpeg",
    "/images/IMG_6185.jpeg",
  ],
  backgroundColor = "#FDFBF7",
  viewText = "View",
  scrollSpeed1 = -200,
  scrollSpeed2 = 150,
  scrollSpeed3 = -100,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const fileNameFromSrc = (src: string | null) => {
    if (!src) return "";
    const parts = src.split("/");
    return parts[parts.length - 1] || "";
  };

  const y1 = useTransform(scrollYProgress, [0, 1], [0, scrollSpeed1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, scrollSpeed2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, scrollSpeed3]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[150vh] overflow-hidden px-4 py-20"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div style={{ y: y1 }} className="flex flex-col gap-8 mt-20">
          {[images[0], images[3], images[6]].map((src, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={src}
                loading="lazy"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div style={{ y: y2 }} className="flex flex-col gap-8">
          {[images[1], images[4], images[7]].map((src, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(src)}
            >
              <img
                src={src}
                loading="lazy"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-black">
                  {viewText}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div style={{ y: y3 }} className="flex flex-col gap-8 mt-40">
          {[images[2], images[5], images[8]].map((src, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={src}
                loading="lazy"
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b to-transparent z-10"
        style={{ background: `linear-gradient(to bottom, ${backgroundColor}, transparent)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t to-transparent z-10"
        style={{ background: `linear-gradient(to top, ${backgroundColor}, transparent)` }}
      />

      {/* Lightbox minimal intégré */}
      <AnimatePresence>
        {lightboxOpen && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "#1a1a1af2" }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl max-h-[80vh] p-4 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                loading="lazy"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="mt-4 flex justify-between items-center text-gray-800">
                <span className="text-sm font-mono tracking-widest uppercase">
                  {fileNameFromSrc(lightboxImage)}
                </span>
                <div className="flex gap-4">
                  <Info
                    size={18}
                    className="cursor-pointer text-gray-400 hover:text-black"
                  />
                  <Download
                    size={18}
                    className="cursor-pointer text-gray-400 hover:text-black"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryMosaic;

