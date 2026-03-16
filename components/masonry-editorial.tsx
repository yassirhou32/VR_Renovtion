"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface EditorialItem {
  h: string;
  title: string;
  sub: string;
}

interface MasonryEditorialProps {
  items?: EditorialItem[];
  backgroundColor?: string;
  imageSeed?: number;
}

const MasonryEditorial: React.FC<MasonryEditorialProps> = ({
  items = [
    { h: "h-64", title: "Patrimoine", sub: "Maison de caractère" },
    { h: "h-96", title: "Pierre", sub: "Façade restaurée" },
    { h: "h-72", title: "Détail", sub: "Sculpture mise en valeur" },
    { h: "h-80", title: "Porche", sub: "Entrée sublimée" },
    { h: "h-64", title: "Mur", sub: "Jointoiement fin" },
    { h: "h-96", title: "Cour", sub: "Ensemble harmonisé" },
    { h: "h-72", title: "Encadrement", sub: "Ouvertures en pierre" },
    { h: "h-64", title: "Parvis", sub: "Accès rénové" },
  ],
  backgroundColor = "#f4f4f0",
  imageSeed = 50,
}) => {
  const images = [
    "/images/DSC08771.jpg",
    "/images/DSC08773.jpg",
    "/images/M7_03511.jpg",
    "/images/M7_03528.jpg",
    "/images/IMG_7388.jpeg",
  ];

  return (
    <div
      className="w-full p-8 min-h-full font-serif text-stone-900"
      style={{ backgroundColor }}
    >
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 mx-auto max-w-7xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative w-full break-inside-avoid bg-white group overflow-hidden border border-stone-200 ${item.h}`}
          >
            <div className="absolute inset-0 bg-stone-300 transition-transform duration-700 group-hover:scale-105">
              <img
                src={images[i % images.length]}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt={item.title}
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                    {item.sub}
                  </p>
                  <h3 className="text-3xl italic font-light">{item.title}</h3>
                </div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-stone-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-20" />
            <div className="absolute top-0 left-0 h-full w-[1px] bg-stone-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top z-20" />
            <div className="absolute bottom-0 right-0 h-full w-[1px] bg-stone-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom z-20" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryEditorial;

