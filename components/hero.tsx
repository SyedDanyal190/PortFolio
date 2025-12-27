"use client"

import { ArrowRight, Code, Github, Linkedin, Download } from "lucide-react"


import { Typewriter } from "react-simple-typewriter"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          {/* <h2 className="text-2xl md:text-3xl text-primary font-semibold">Hi, I'm Muhammad Danyal</h2> */}
       <h2 className="text-2xl md:text-3xl text-primary font-semibold">
  <Typewriter
    words={["Hi, I'm Muhammad Danyal"]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h2>



<h1 className="text-5xl md:text-7xl font-bold text-pretty">
  Full Stack{" "}
  <span className="text-primary">
    <Typewriter
      words={["Developer +"]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={130}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h1>

         
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable applications, solving complex problems, and delivering clean, maintainable code
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => setActiveSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors inline-flex items-center justify-center gap-2 group cursor-pointer"
          >
            View My Projects
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="px-8 py-3 bg-muted text-muted-foreground rounded-lg font-semibold hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
     
        </div>

        <div className="pt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">20+</div>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2+</div>
            <p className="text-sm text-muted-foreground">Years Coding</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">10+</div>
            <p className="text-sm text-muted-foreground">Tech Stack</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 pt-12">
          <a href="https://github.com/SyedDanyal190"            target="_blank"  rel="noopener noreferrer"  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/md-danyal/"            target="_blank"  rel="noopener noreferrer"  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Code className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
