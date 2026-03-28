"use client"

const formations = [
  {
    degree: "Master Chef de projet ingénierie logicielle",
    school: "IPI TOULOUSE",
    year: "2019 - 2022",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 9.5V17a7 7 0 007 7 7 7 0 007-7V9.5" />
      </svg>
    ),
  },
  {
    degree: "Licence concepteur développeur d'applications",
    school: "IPI TOULOUSE",
    year: "2018 - 2019",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const certifications = [
  { name: "AWS Solutions Architect Professional", year: "2024" },
  { name: "Google Cloud Professional Architect", year: "2023" },
  { name: "Kubernetes Administrator (CKA)", year: "2022" },
]

export function FormationsSection() {
  return (
    <section id="formations" className="py-24 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 rounded-full bg-terminal animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Formations
          </h2>
        </div>

        {/* Education */}
        <div className="grid gap-6 mb-12">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {formation.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{formation.degree}</h3>
                    <span className="text-muted-foreground font-mono text-sm">{formation.year}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{formation.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {/* <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-colors duration-300"
              >
                <span className="text-foreground text-sm">{cert.name}</span>
                <span className="text-muted-foreground text-xs ml-2 font-mono">{cert.year}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
