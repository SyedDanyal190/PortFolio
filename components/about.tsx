export default function About() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">About Me</h2>
          <div className="w-24 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience building robust web applications.
                Specializing in modern JavaScript ecosystems, I love crafting elegant solutions to complex technical
                challenges and mentoring junior developers along the way.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I focus on writing clean, maintainable code that scales. Whether building MVPs or enterprise
                applications, I prioritize performance, security, and user experience while following best practices and
                industry standards.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
              <div className="space-y-4">
                {[
                  "Full Stack Development",
                  "React & Next.js",
                  "TypeScript & JavaScript",
                  "Database Design (SQL/NoSQL)",
                  "REST APIs & Integrations",
                  "DevOps & Deployment",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "NestJS",
                  "PostgreSQL",
                  "MongoDB",
                  "Tailwind CSS",
                  "Git",
                  "Docker",
                ].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
