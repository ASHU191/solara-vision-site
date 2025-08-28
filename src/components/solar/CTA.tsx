import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight, Calculator } from "lucide-react";

const CTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+923001234567?text=Hi! I'm interested in solar energy solutions.", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+923001234567", "_self");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Calculator className="w-4 h-4 text-secondary mr-2" />
              <span className="text-white text-sm font-semibold">
                Ready to Get Started?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold font-poppins text-white mb-6"
            >
              Start Saving Money
              <span className="block text-secondary">
                Today!
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              Get your free solar consultation and customized quote. Our experts will design the perfect solar solution for your home or business.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Button 
              variant="solar" 
              size="lg" 
              className="group bg-secondary hover:bg-secondary/90 text-navy font-bold px-8 py-4 text-lg"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0300-1234567
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg group"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-8"
          >
            {[
              { title: "Free Consultation", desc: "Expert advice at no cost" },
              { title: "Custom Design", desc: "Tailored to your needs" },
              { title: "Quick Installation", desc: "Professional setup in 1-3 days" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                </div>
                <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <p className="text-white/90 text-lg">
              <span className="text-secondary font-bold">Limited Time Offer:</span> Get 15% off your solar installation when you book your consultation this month!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;