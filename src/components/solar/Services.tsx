import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Battery, 
  Sun, 
  Settings, 
  Shield, 
  Wrench,
  ArrowRight,
  Home
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Panel Installation",
      description: "Premium monocrystalline and polycrystalline panels with maximum efficiency and 25-year warranty.",
      features: ["Tier 1 panels", "Professional installation", "Performance monitoring"],
      color: "from-primary to-primary/80"
    },
    {
      icon: Battery,
      title: "Solar Inverters",
      description: "High-efficiency inverters for optimal power conversion with advanced grid-tie and off-grid solutions.",
      features: ["MPPT technology", "Remote monitoring", "Hybrid solutions"],
      color: "from-secondary to-secondary/80"
    },
    {
      icon: Zap,
      title: "Battery Systems",
      description: "Long-lasting lithium and AGM batteries for reliable energy storage and backup power.",
      features: ["10+ year lifespan", "Deep cycle", "Smart management"],
      color: "from-primary/80 to-secondary/80"
    },
    {
      icon: Home,
      title: "Complete Home Solutions",
      description: "End-to-end residential solar systems designed for maximum savings and energy independence.",
      features: ["Custom design", "Net metering", "Energy audit"],
      color: "from-secondary/80 to-primary"
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Comprehensive maintenance services to ensure your solar system operates at peak performance.",
      features: ["Regular cleaning", "Performance checks", "Component replacement"],
      color: "from-navy to-primary/60"
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      description: "Extended warranties and 24/7 customer support for complete peace of mind.",
      features: ["25-year panel warranty", "24/7 support", "Insurance assistance"],
      color: "from-primary/60 to-secondary/60"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <Wrench className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary text-sm font-semibold">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6"
          >
            Complete Solar
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Energy Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From initial consultation to ongoing maintenance, we provide comprehensive solar solutions tailored to your energy needs and budget.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-solar transition-all duration-300 group border-0 bg-gradient-card">
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-solar group-hover:shadow-golden transition-all duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn hover:bg-primary hover:text-white border-primary/20"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;