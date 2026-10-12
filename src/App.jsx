
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WhoAmI from "./components/whoami";
import Timeline from "./components/timeline";
function App() {
  return (
    <main className="min-h-screen bg-[#232a34] px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="py-6">
          <Navbar />
        </div>

        <Hero />
        <WhoAmI />
        <Timeline />
      </div>
    </main>
  );
}

export default App;