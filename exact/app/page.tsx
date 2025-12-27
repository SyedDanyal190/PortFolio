"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === "home" && <Hero setActiveSection={setActiveSection} />}
      {activeSection === "about" && <About />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}

      <Footer />
    </div>
  )
}
