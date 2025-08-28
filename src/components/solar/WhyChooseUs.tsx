import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Award, 
  Shield, 
  Clock, 
  DollarSign, 
  Users, 
  Headphones,
  Zap,
  CheckCircle
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only Tier 1 components with international certifications and extended warranties.",
      stats: "25-Year Warranty"
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Professional installation completed in 1-3 days with minimal disruption to your routine.",
      stats: "1-3 Days Setup"
    },
    {
      icon: DollarSign,
      title: "Best Pricing",
      description: "Competitive pricing with flexible payment plans and maximum return on investment.",
      stats: "Up to 80% Savings"
    },
    {
      icon: Shield,
      title: "Guaranteed Performance",
      description: "Performance guarantees with comprehensive insurance coverage and system monitoring.",
      stats: "99% Uptime"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified engineers and technicians with 25+ years of combined experience.",
      stats: "25+ Years Experience"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support and maintenance services for complete peace of mind.",
      stats: "24/7 Available"
    }
  ];

  const achievements = [
    { number: "5000+", label: "Happy Customers" },
    { number: "25+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-muted/30 to-background">
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
            className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-secondary mr-2" />
            <span className="text-secondary text-sm font-semibold">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6"
          >
            Pakistan's Most
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reliable Solar Company
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We don't just install solar panels - we deliver complete energy solutions that transform how you power your life.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-elegant transition-all duration-500 group border-0 bg-gradient-card hover:scale-105">
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mb-6 shadow-solar group-hover:shadow-golden transition-all duration-300"
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Stats Badge */}
                  <div className="absolute top-0 right-0 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                    {reason.stats}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-solar rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-poppins text-white mb-8"
          >
            Trusted by Thousands Across Pakistan
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/80 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;