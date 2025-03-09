import React from "react";
import { Navbar, Services, Pricing, Testimonials, Contact } from "./components";

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
