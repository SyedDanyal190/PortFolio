"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer" aria-label="Toggle theme">
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
    </button>
  )
}
