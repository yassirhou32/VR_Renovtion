import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import GalleryFilmStrip from "@/components/gallery-film-strip";

export default function NettoyageProtectionToitureRealisationPage() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <GalleryFilmStrip
        images={[
          "/images/IMG_7472.jpeg",
          "/images/C085261D-4E94-4EE1-B4C5-C3703D8AB9A8.JPG",
          "/images/IMG_6137.jpeg",
          "/images/IMG_6185.jpeg",
          "/images/IMG_6187.jpeg",
          "/images/IMG_7394.jpeg",
          "/images/IMG_7463.jpeg",
          "/images/IMG_7468.jpeg",
        ]}
        backgroundColor="#000000"
        archiveText="TOITURE · VR HARMONIE"
        figurePrefix="FIG."
        isoText="ISO 400"
        scrollHeight="280vh"
      />
      <Footer />
    </main>
  );
}

