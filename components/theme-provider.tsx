"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)



// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   //Light
//   // const [theme, setTheme] = useState<"light" | "dark">("light")  // default light
//   // Dark
//   const [theme, setTheme] = useState<"light" | "dark">("dark") // default dark
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
//     const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

//     setTheme(initialTheme)
//     document.documentElement.classList.toggle("dark", initialTheme === "dark")
//     setMounted(true)
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light"
//     setTheme(newTheme)
//     localStorage.setItem("portfolio-theme", newTheme)
//     document.documentElement.classList.toggle("dark", newTheme === "dark")
//   }

//   return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
// }



export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark") // initial state doesn't matter
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("portfolio-theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // Only render children after theme is set
  if (!mounted) return null

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}




export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}




















