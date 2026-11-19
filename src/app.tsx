import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Aanbod from "./pages/Aanbod";
import Fasciatherapie from "./pages/Fasciatherapie";
import Kinesitherapie from "./pages/Kinesitherapie";
import Coaching from "./pages/Coaching";
import OverMij from "./pages/OverMij";
import Tarieven from "./pages/Tarieven";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aanbod" element={<Aanbod />} />
          <Route path="/aanbod/fasciatherapie" element={<Fasciatherapie />} />
          <Route path="/aanbod/kinesitherapie" element={<Kinesitherapie />} />
          <Route path="/aanbod/coaching" element={<Coaching />} />
          <Route path="/over-mij" element={<OverMij />} />
          <Route path="/tarieven" element={<Tarieven />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}