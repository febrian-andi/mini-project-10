import React from "react"
import Navbar from './components/Navbar'
import HeaderSection from "./containers/HeaderSection"
import FeaturesSection from "./containers/FeaturesSection"
import CategoriesSection from "./containers/CategoriesSection"
import AboutSection from "./containers/AboutSection"
import ProductSection from "./containers/ProductSection"
import TestimonialSection from "./containers/TestimonialSection"
import ContactSection from "./containers/ContactSection"
import Footer from "./components/Footer"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => {

  return (
    <>
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
  )
}

export default App
