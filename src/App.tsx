import React from "react"
import Navbar from './components/Navbar'
import HeaderSection from "./containers/HeaderSection"
import FeaturesSection from "./containers/FeaturesSection"
import CategoriesSection from "./containers/CategoriesSection"
import AboutSection from "./containers/AboutSection"
import ProductSection from "./containers/ProductSection"
import TestimonialSection from "./containers/TestimonialSection"
import ContactSection from "./containers/ContactSection"

const App: React.FC = () => {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <HeaderSection />
        <FeaturesSection />
        <CategoriesSection />
        <AboutSection />
        <ProductSection />
        <TestimonialSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
