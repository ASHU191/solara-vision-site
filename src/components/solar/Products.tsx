import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Sun, 
  Battery, 
  Cpu, 
  Shield, 
  Star,
  ArrowRight,
  Filter
} from "lucide-react";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Sun },
    { id: "panels", name: "Solar Panels", icon: Sun },
    { id: "inverters", name: "Inverters", icon: Cpu },
    { id: "batteries", name: "Batteries", icon: Battery },
    { id: "accessories", name: "Accessories", icon: Shield }
  ];

  const products = [
    {
      id: 1,
      name: "Monocrystalline Solar Panel 400W",
      category: "panels",
      price: "PKR 25,000",
      originalPrice: "PKR 30,000",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
      rating: 4.9,
      specs: ["400W Output", "25-Year Warranty", "21% Efficiency"],
      badge: "Best Seller",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Polycrystalline Solar Panel 320W",
      category: "panels",
      price: "PKR 18,000",
      originalPrice: "PKR 22,000",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      rating: 4.7,
      specs: ["320W Output", "20-Year Warranty", "17% Efficiency"],
      badge: "Popular",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "Hybrid Inverter 5KW MPPT",
      category: "inverters",
      price: "PKR 85,000",
      originalPrice: "PKR 95,000",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      rating: 4.8,
      specs: ["5KW Capacity", "MPPT Technology", "Grid Tie + Off Grid"],
      badge: "Premium",
      badgeColor: "bg-purple-500"
    },
    {
      id: 4,
      name: "Lithium Battery 100Ah",
      category: "batteries",
      price: "PKR 45,000",
      originalPrice: "PKR 52,000",
      image: "https://images.unsplash.com/photo-1609069932122-a8a3b0d2c2b6?w=400&h=300&fit=crop",
      rating: 4.9,
      specs: ["100Ah Capacity", "10-Year Life", "Deep Cycle"],
      badge: "Long Life",
      badgeColor: "bg-yellow-500"
    },
    {
      id: 5,
      name: "AGM Deep Cycle Battery 150Ah",
      category: "batteries",
      price: "PKR 28,000",
      originalPrice: "PKR 33,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.6,
      specs: ["150Ah Capacity", "5-Year Warranty", "Maintenance Free"],
      badge: "Reliable",
      badgeColor: "bg-gray-500"
    },
    {
      id: 6,
      name: "Solar Mounting Kit",
      category: "accessories",
      price: "PKR 8,500",
      originalPrice: "PKR 10,000",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
      rating: 4.5,
      specs: ["Aluminum Rails", "Stainless Steel Bolts", "Easy Installation"],
      badge: "Essential",
      badgeColor: "bg-orange-500"
    }
  ];

  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-20 bg-background">
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
            <Filter className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary text-sm font-semibold">
              Our Products
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6"
          >
            Premium Solar
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Products & Equipment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our extensive range of high-quality solar panels, inverters, batteries, and accessories from world-renowned manufacturers.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-solar text-white shadow-solar"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-500 group border-0 bg-gradient-card h-full">
                <div className="relative">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white border-0`}>
                      {product.badge}
                    </Badge>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium ml-1">{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-poppins text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Specs */}
                    <ul className="space-y-1 mb-4">
                      {product.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                      </div>
                      <div className="text-green-600 font-semibold text-sm">
                        Save{" "}
                        {Math.round(((parseInt(product.originalPrice.replace(/[^\d]/g, "")) - 
                          parseInt(product.price.replace(/[^\d]/g, ""))) / 
                          parseInt(product.originalPrice.replace(/[^\d]/g, ""))) * 100)}%
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group/btn hover:bg-primary hover:text-white border-primary/20"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold font-poppins text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts can design a complete solar system tailored to your specific needs and budget.
            </p>
            <Button variant="solar" size="lg" className="bg-secondary hover:bg-secondary/90 text-navy">
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;