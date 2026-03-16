import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import GalleryFlashlight from "@/components/gallery-flashlight";

export default function RenovationFacadeRealisationPage() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <GalleryFlashlight
        images={[
          "/images/IMG_6187.jpeg",
          "/images/IMG_6557.jpeg",
          "/images/IMG_2274.jpeg",
          "/images/IMG_2263.jpeg",
          "/images/DSC08774.jpg",
          "/images/DSC08769.jpg",
          "/images/DSC08764.jpg",
          "/images/DJI_0080.jpg",
        ]}
        backgroundColor="#000000"
        lensSize={300}
      
      />
      <Footer />
    </main>
  );
}

