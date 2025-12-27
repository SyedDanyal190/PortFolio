"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Real-Time Traffic Analytics Dashboard",
    description:
     "Real-time traffic analytics system processing AI-generated toll plaza video data. Built a high-performance Node.js backend to handle large nested JSON datasets and stream live & historical insights to a React dashboard.",
        tags: ["Node.js", "Express", "PostgreSQL", "JWT Auth"],
    image: "/traffic-dashboard.jpg",
    links: { 
      // demo: "#",
       github: "https://github.com/SyedDanyal190/Traffic_Analysis_Backend" },
    category: "Full Stack",
    date: "2025",
    technologies: ["React.js","Node.js","PostgreSQL"],
  },
   {
     id: 2,
  title: "Hospital Doctor & Admin Dashboard",
  description:
    "Comprehensive hospital management dashboard for doctors and admins. Includes patient records, appointments, staff management, billing, inventory, and real-time hospital analytics.",
  tags: ["Next.js", "TypeScript", "Dashboard", "Hospital Management"],
  image: "/hospital-dashboard.jpg",
  links: {
    demo: "#",
    github: "https://github.com/SyedDanyal190/hospital-doctors-dashboard"
  },
  category: "Full Stack",
  date: "2025",
  technologies: ["Next.js", "TypeScript", "Tailwind","Node.js","MongoDB"]
},


{
  id: 3,
  title: "AI-Powered Smart Parking Analytics Dashboard",
  description:
  "Real-time smart parking dashboard with AI camera data, streaming live vehicle counts, occupancy, and payments via Node.js and WebSockets. Admins can manage rates and monitor total vehicles.",
  tags: ["Node.js", "WebSockets", "AI Integration", "Real-Time Analytics"],
  image: "/parking-dashboard.jpg",
  links: {
    // demo: "#",
    github: "https://github.com/SyedDanyal190/Parking-Statistics-Dashboard"
  },
  category: "Full Stack",
  date: "2025",
  technologies: [
    "React.js",
    "Node.js",
      
    "AI JSON Data"
  ]
},

  {
    id: 4,
    title: "Real-time Chat Application",
    description: "WebSocket-based chat app with user authentication, message history, and typing indicators.",
    tags: ["Socket.io", "React.js", "Node.js", "Redis"],
    image: "/chat-application-interface.png",
    links: { demo: "#", github: "https://github.com/SyedDanyal190/Chat-App" },
    category: "Full Stack",
    date: "2024",
    technologies: ["Next.js","Tailwind" ,"WebSocket", "Node.js","MongoDB"],
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with real-time analytics, custom reports, and export functionality.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "/data-analytics-dashboard.png",
    links: { demo: "#", github: "https://github.com/SyedDanyal190/AI-Powered-Business-Analytics" },
    category: "Full Stack",
    date: "2023",
    technologies: ["React.js", "Node.js","MySQL"],
  },
  {
    id: 6,
    title: "Weather App with API Integration",
    description: "Full-stack weather app integrating third-party APIs with caching strategy and responsive design.",
    tags: ["Next.js", "TypeScript", "External APIs", "Tailwind"],
    image: "/weather.jpg",
    links: { demo: "#", github: "https://github.com/SyedDanyal190/Weather-app" },
    category: "Frontend",
    date: "2024",
    technologies: ["Next.js","Tailwind",],
  },
  // {
  //   id: 7,
  //   title: "Content Management System",
  //   description: "Custom CMS with role-based access, media management, and scheduled publishing features.",
  //   tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
  //   image: "/content-management-system.png",
  //   links: { demo: "#", github: "https://github.com/SyedDanyal190/CRM-dashboard" },
  //   category: "Full Stack",
  //   date: "2022",
  //   technologies: ["Next.js", "React.js", "Node.js","PostgreSQL"],
  // },
{
    id: 8,
    title: "Accounting & Finance Dashboard",
    description:
      "Accounting dashboard to track revenue, expenses, and financial metrics with interactive charts and summary reports.",
    tags: ["React.js", "TypeScript", "Finance", "Dashboard"],
    image: "/accounting-dashboard.jpg",
    links: {
      github: "https://github.com/SyedDanyal190/Accounting-Dashboard",
      // demo: "#",
    },
    category: "Full Stack",
    date: "2024",
    technologies: ["Next.js","Tailwind","Node.js","MongoDB"],
  },

  {
    id: 9,
    title: "CRM Dashboard System",
    description:
      "Customer Relationship Management dashboard for managing leads, customers, and sales performance with a clean admin interface.",
    tags: ["CRM", "Dashboard", "TypeScript", "Admin Panel"],
    image: "/crm-dashboard.jpg",
    links: {
      github: "https://github.com/SyedDanyal190/CRM-dashboard",
      // demo: "#",
    },
    category: "Full Stack",
    date: "2023",
    technologies: ["React.js", "TypeScript","Node.js","MongoDB"],
  },

   {
    id: 10,
    title: "E-Commerce Full Stack Platform",
    description: "Full-stack e-commerce application with secure payments, product & inventory management, and an admin dashboard for order and user control.",
    tags: ["Next.js", "Stripe", "MongoDB", "TypeScript","Redux"],
    image: "/ecommerce-store.png",
    links: { demo: "#", github: "https://github.com/SyedDanyal190/fullstack-ecommerce-app" },
    category: "Full Stack",
    date: "2025",
    technologies: ["Next.js", "Tailwind","Node.js","MongoDB"],
  },

  {
    id: 11,
    title: "Employee Management System",
    description:
      "Employee management system for handling staff records, roles, and organizational data.",
    tags: ["HR System", "TypeScript", "CRUD"],
    image: "/content-management-system.png",
    links: {
      github: "https://github.com/SyedDanyal190/Employee-Management-System",
      // demo: "#",
    },
    category: "Full Stack",
    date: "2025",
    technologies: [ "React.js","Node.js","MongoDB"],
  },

 
  {
    id: 12,
    title: "Crypto & Stock Trading Dashboard",
    description:
      "Trading dashboards displaying real-time crypto, stock, and currency market data with interactive visualizations.",
    tags: ["Trading", "Crypto", "Stocks", "Dashboard"],
    image: "/crypto-dashboard.jpg",
    links: {
      github: "https://github.com/SyedDanyal190/Trading-Dashboard",
      // demo: "#",
    },
    category: "Full Stack",
    date: "2025",
    technologies: ["Next.js", "Tailwind","Node.js","MongoDB"],
  },

 {
  id: 13,
  title: "Olive Inventory Management System",
  description:
  "Full-stack inventory management system with an admin dashboard to track products, monitor stock, and streamline operations.",
tags: ["Inventory Management", "Admin Dashboard", "Full Stack"],
  image: "/olive-dashboard.jpg",
  links: {
    github: "https://github.com/SyedDanyal190/Olive-Inventory-Managment",
  },
  category: "Full Stack",
  date: "2023",
  technologies: ["TypeScript", "React.js", "Node.js"]
},
{
  id: 14,
  title: "Hospital Website ",
  description:
    "Modern, responsive hospital website showcasing services, departments, doctors, and appointment booking. Designed with a clean UI and optimized for performance and accessibility.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  image: "/hospital-website.jpg",
  links: {
    demo: "#",
    github: "https://github.com/SyedDanyal190/Hospital-Site"
  },
  category: "Frontend",
  date: "2024",
  technologies: ["Next.js", "TypeScript", "Tailwind"]
},

]

export default function Projects() {
  const [sortBy, setSortBy] = useState("latest")
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const availableTechs = Array.from(new Set(projects.flatMap((p) => p.technologies)))

  const sortedProjects = [...projects]
    .filter((project) => !selectedTech || project.technologies.includes(selectedTech))
    .sort((a, b) => {
      if (sortBy === "latest") {
        return Number.parseInt(b.date) - Number.parseInt(a.date)
      }
      return a.title.localeCompare(b.title)
    })

  return (
    <section className="min-h-screen py-20 px-4 bg-linear-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Featured Projects</h2>
            <div className="w-24 h-1 bg-accent rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects showcasing my full-stack development expertise and problem-solving skills
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-accent transition-colors text-sm font-semibold cursor-pointer"
            >
              Sort: {sortBy === "latest" ? "Latest" : "A-Z"}
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10 cursor-pointer">
                <button
                  onClick={() => {
                    setSortBy("latest")
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm ${
                    sortBy === "latest" ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  Latest Projects
                </button>
                <button
                  onClick={() => {
                    setSortBy("alphabetical")
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-muted transition-colors text-sm   ${
                    sortBy === "alphabetical" ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  Alphabetical
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
              selectedTech === null
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:border-accent"
            }`}
          >
            All Projects
          </button>
          {availableTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm ${
                selectedTech === tech
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-accent"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg group"
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {/* <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-semibold"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a> */}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-semibold cursor-pointer"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
