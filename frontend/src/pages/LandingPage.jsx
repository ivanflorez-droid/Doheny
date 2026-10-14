import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Mission } from "@/components/landing/Mission";
import { Challenge } from "@/components/landing/Challenge";
import { Model } from "@/components/landing/Model";
import { PicoUnion } from "@/components/landing/PicoUnion";
import { Impact } from "@/components/landing/Impact";
import { Partnership } from "@/components/landing/Partnership";
import { Voices } from "@/components/landing/Voices";
import { Partners } from "@/components/landing/Partners";
import { Invitation } from "@/components/landing/Invitation";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-alabaster text-brand-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Challenge />
        <Model />
        <PicoUnion />
        <Impact />
        <Partnership />
        <Voices />
        <Partners />
        <Invitation />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
