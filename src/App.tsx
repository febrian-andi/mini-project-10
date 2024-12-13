import React from "react";
import Navbar from "./components/Navbar";
import HeaderSection from "./containers/HeaderSection";
import FeaturesSection from "./containers/FeaturesSection";
import CategoriesSection from "./containers/CategoriesSection";
import AboutSection from "./containers/AboutSection";
import ProductSection from "./containers/ProductSection";
import TestimonialSection from "./containers/TestimonialSection";
import ContactSection from "./containers/ContactSection";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FurniShop - Best Furniture Store</title>
        <meta
          name="description"
          content="FurniShop is the best online furniture store offering high-quality furniture at affordable prices. Shop now for a comfortable living space!"
        />
        <meta
          name="keywords"
          content="Furniture, Online Furniture Store, Home Decor, FurniShop"
        />
        <meta name="author" content="FurniShop Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="FurniShop - Best Furniture Store" />
        <meta
          property="og:description"
          content="Shop for high-quality furniture with FurniShop. Your comfort is our priority!"
        />
        <meta property="og:url" content="https://mini-project-10-fan.vercel.app" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FurniShop",
            url: "https://mini-project-10-fan.vercel.app",
            description:
              "FurniShop is the best online furniture store offering high-quality furniture at affordable prices.",
            publisher: {
              "@type": "Organization",
              name: "FurniShop",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FurniShop",
            url: "https://mini-project-10-fan.vercel.app",
          })}
        </script>
      </Helmet>
      
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <div id="home">
          <HeaderSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <CategoriesSection />
        <div id="about">
          <AboutSection />
        </div>
        <ProductSection />
        <TestimonialSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
