import Header from "@/components/solar/Header";
import Products from "@/components/solar/Products";
import Footer from "@/components/solar/Footer";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;