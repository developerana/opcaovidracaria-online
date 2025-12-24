import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Opção Vidraçaria | Maria da Fé - MG | Box, Espelhos e Vidros</title>
        <meta
          name="description"
          content="Opção Vidraçaria em Maria da Fé - MG. Especialistas em box para banheiro, espelhos decorativos, portas e janelas de vidro. Solicite seu orçamento gratuito!"
        />
        <meta
          name="keywords"
          content="vidraçaria, Maria da Fé, box banheiro, espelhos, vidros temperados, portas de vidro, janelas"
        />
        <link rel="canonical" href="https://opcaovidracaria.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
