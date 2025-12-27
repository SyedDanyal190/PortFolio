export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Portfolio</h3>
            <p className="text-sm text-muted-foreground">Full Stack Developer crafting modern web solutions</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="tel:+923041901901" className="hover:text-primary transition-colors">
                     +923215290557
                </a>
              </li>
              <li>
                <a href="mailto:daniyalsyed487@gmail.com" className="hover:text-primary transition-colors">
                  daniyalsyed487@gmail.com
                </a>
              </li>
              <li className="text-xs pt-1">Available for freelance & full-time roles</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
           <li>
  <a href="#about" className="hover:text-primary transition-colors">
    About
  </a>
</li>
              <li>
                <a href="projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-lg">Social</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="https://github.com/SyedDanyal190" 
                 target="_blank"  rel="noopener noreferrer" 
                 className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/md-danyal/"  
                target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Muhammad Danyal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}










