import { AboutSection } from "@/components/AboutSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  const handleExploreCollections = () => {
    const el = document.getElementById("collections");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-navy text-cream">
      <Navigation />

      <main>
        <HeroSection onExploreClick={handleExploreCollections} />
        <CollectionsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
