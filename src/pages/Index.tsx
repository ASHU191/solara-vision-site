import Header from "@/components/solar/Header";
import Hero from "@/components/solar/Hero";
import About from "@/components/solar/About";
import Services from "@/components/solar/Services";
import WhyChooseUs from "@/components/solar/WhyChooseUs";
import Testimonials from "@/components/solar/Testimonials";
import CTA from "@/components/solar/CTA";
import Footer from "@/components/solar/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
