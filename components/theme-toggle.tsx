// "use client"

// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "./theme-provider"

// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme()

//   return (
//     <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer" aria-label="Toggle theme">
//       {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
//     </button>
//   )
// }


"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
    </button>
  )
}

