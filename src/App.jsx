import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WhoAmI from "./components/whoami";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
import Aadliyaat from "./pages/aadliyaat";
import Footer from "./components/footer";
import Businesses from "./pages/businesses";
import AdilCast from "./pages/adilcast";
import Animation from "./components/Animation";

function Home() {
  return (
    <>
      <Hero />
      <WhoAmI />
      <Timeline />
      <Contact />
      <Animation />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-[#232a34] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="py-6">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/businesses" element={<Businesses />} />

            <Route path="/aadliyaat" element={<Aadliyaat />} />

            <Route path="/adilcast" element={<AdilCast />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
