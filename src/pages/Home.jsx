import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Who from "../sections/Who";
import Why from "../sections/Why";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import Head from "../components/desktopHeader";
import What from "../sections/What";
import Subscribe from "../sections/Subscribe";

const Home = () => {
  return (
    <div>
      <Head />
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Who />
      <Why />
      <Services />
      <What />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
