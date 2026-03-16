import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import MasonryEditorial from "@/components/masonry-editorial";

export default function RestaurationPierreRealisationPage() {
  return (
    <main className="w-full bg-[#f4f4f0]">
      <Navbar />
      <div className="pt-20 md:pt-28">
        <MasonryEditorial
          backgroundColor="#f4f4f0"
          items={[
            { h: "h-64", title: "Encadrement", sub: "Ouvertures en pierre" },
            { h: "h-96", title: "Façade", sub: "Mur restauré" },
            { h: "h-72", title: "Détail", sub: "Sculpture de pierre" },
            { h: "h-80", title: "Cour", sub: "Ensemble harmonisé" },
            { h: "h-64", title: "Porche", sub: "Entrée valorisée" },
            { h: "h-96", title: "Mur", sub: "Jointoiement fin" },
            { h: "h-72", title: "Patrimoine", sub: "Maison ancienne" },
            { h: "h-64", title: "Parvis", sub: "Accès rénové" },
          ]}
        />
      </div>
      <Footer />
    </main>
  );
}

