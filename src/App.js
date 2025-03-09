import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
