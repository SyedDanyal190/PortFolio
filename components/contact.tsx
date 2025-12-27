

"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { toast } from "sonner"
// import emailjs from "emailjs-com"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const keyMap: Record<string, string> = {
      from_name: "name",
      email_id: "email",
      message: "message",
    }
    const stateKey = keyMap[e.target.name]
    setFormData({
      ...formData,
      [stateKey]: e.target.value,
    })
  }


 
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  toast.success("Message submitted successfully!");
  setFormData({ name: "", email: "", message: "" });
};



  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's talk about how I can help
          </p>
        </div>

        {/* Form */}
        <div className="bg-card rounded-lg p-8 md:p-12 border border-border space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="to_name" value="Your Name or Company" />

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email_id"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="space-y-4 pt-8 border-t border-border">
            <h3 className="font-semibold text-lg">Other ways to connect</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:text-primary hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/md-danyal/"  
                  target="_blank"  rel="noopener noreferrer" 
                
                className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:text-primary hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
              href="https://github.com/SyedDanyal190"
                  target="_blank"  rel="noopener noreferrer" 
                
                className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:text-primary hover:bg-muted transition-colors"
              >
                <Github
                 className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:text-primary hover:bg-muted transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}








