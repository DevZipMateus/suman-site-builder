import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EgestorERP from "@/components/EgestorERP";
import VitrineCallout from "@/components/VitrineCallout";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EgestorERP />
        <VitrineCallout />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
