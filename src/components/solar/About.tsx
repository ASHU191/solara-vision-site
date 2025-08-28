import { motion } from "framer-motion";
import { CheckCircle, Users, Clock, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with 25+ years experience"
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Complete setup in 1-3 days with minimal disruption"
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      description: "Top-tier components with extended warranties"
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "25+ Years Experience",
    "5000+ Happy Customers",
    "99% Success Rate",
    "24/7 Customer Support",
    "Nationwide Service"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <span className="text-primary text-sm font-semibold">
                About Solara Vision
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
                Trusted Solar Partner
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              For over 25 years, Solara Vision has been at the forefront of Pakistan's solar revolution. We've helped thousands of families and businesses transition to clean, reliable solar energy with our premium solutions and unmatched expertise.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-3 gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-solar rounded-xl flex items-center justify-center mx-auto mb-4 shadow-solar">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
                Why Choose Solara Vision?
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;