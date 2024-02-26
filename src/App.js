import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderPage from "./pages/headerpage";
import HeroPage from "./pages/heropage";
import HeroImagePage from "./pages/heroimagepage";
import Enquiry from "./pages/enquiry";
import ForPage from "./pages/forpage";
import OurGoal from "./pages/ourgoal";
import ServicePage from "./pages/servicepage";
import AboutPage from "./pages/aboutpage";
import FooterPage from "./pages/footerpage";
import Note from "./pages/note";
import DoctorsForm from "./pages/doctorsform";



function Homepage() {
  return (
    <div className="container">
      <HeaderPage />
      <HeroPage />
      <HeroImagePage />
      <Enquiry />
      <ForPage />
      <OurGoal />
      <ServicePage />
      <AboutPage />
      <FooterPage /> 
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/note" element={<Note />} />
        <Route path="/doctorsform" element={<DoctorsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
