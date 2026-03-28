"use client"

const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Next.js", "TypeScript", "Angular", "Blazor"] 
  },
  { 
    category: "Backend", 
    items: ["C#", "Node.js", "Express"] 
  },
  { 
    category: "Design & Styling", 
    items: ["Figma", "shadcn/ui", "TailwindCSS", "Angular Material"] 
  },
  { 
    category: "Database", 
    items: ["MySQL", "SQL Server"] 
  },
  { 
    category: "Versioning", 
    items: ["Git (GitLab & GitHub)", "Gerrit"] 
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 rounded-full bg-star animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            A propos
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Bio */}
          <div className="md:col-span-3">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {"Je suis un développeur full stack passionné travaillant actuellement chez Infotel avec un fort attrait pour le développement Web. Mon rôle et mes compétences me permettent de me concentrer pleinement sur la création de solutions web performantes qui répondront à vos besoins. "}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  J'ai commencé ma carrière en alternance, ce qui m'a permis d'acquérir une solide expérience pratique tout en poursuivant mes études. Depuis, j'ai eu l'opportunité de travailler sur une variété de projets, allant de petites applications à des systèmes complexes pour des clients de divers secteurs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Je souhaite maintenant relever de nouveaux défis en tant que développeur web confirmé, où je pourrai mettre à profit mes compétences techniques et mon expérience pour contribuer à des projets innovants et impactants.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    En recherche de nouvelles opportunité
                  </span>
                  <span>•</span>
                  <span>8 ans d'expérience</span>
                  <span>•</span>
                  <span>10+ projets terminés</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4"
                >
                  <h4 className="text-primary font-mono text-sm mb-3">{`// ${skillGroup.category}`}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary/50 text-foreground text-xs font-mono rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
