"use client";

import Navigation from "@/components/Navigation";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import ModernServices from "@/components/ModernServices";
import ModernSpecialties from "@/components/ModernSpecialties";
import ModernContact from "@/components/ModernContact";
import ModernFooter from "@/components/ModernFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ModernHero />
      <ModernAbout />
      <ModernServices />
      <ModernSpecialties />
      <ModernContact />
      <ModernFooter />
    </main>
  );
}
