import { useState } from "react";
import { NavBar } from "./components/NavBar"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { CoursesSection } from "./components/CoursesSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { Footer } from "./components/Footer"
import { ApplicationFormModal } from "./components/ApplicationFormModal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black">
      <NavBar onApplyClick={() => setIsModalOpen(true)} />
      <main>
        <HeroSection onApplyClick={() => setIsModalOpen(true)} />
        <AboutSection />
        <CoursesSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ApplicationFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

export default App
