"use client"

import { useState } from "react"

interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  children?: Experience[]
}

const experienceData: Experience[] = [
  {
    id: "InPact",
    company: "Infotel Blagnac - LABO",
    role: "Lead Frontend Developer",
    period: "Avril 2025 - Maintenant",
    description:
      "Référent frontend sur la refonte et migration d’une plateforme de gestion (tickets, licences, utilisateurs). Refonte de l’architecture, modernisation Angular et amélioration globale de la qualité du code. Encadrement technique, code reviews et point de contact principal côté front.",
    technologies: ["Angular", "TypeScript", "Gitlab", "Jira", "Vitest"],
  },
  {
    id: "License Manager",
    company: "Infotel Blagnac - LABO",
    role: "Frontend Developer",
    period: "Fév 2025 - Avril 2025",
    description:
      "Mise à jour et stabilisation d’une application Angular : gestion des incompatibilités, mise à niveau des librairies et amélioration de la fiabilité via tests fonctionnels.",
    technologies: ["Angular", "Gitlab", "Jira", "Vitest"],
  },
  {
    id: "Etude d’impact",
    company: "Infotel Blagnac - BPCE",
    role: "Software Engineer",
    period: "Oct 2024 - Fév 2025",
    description:
      "Analyse d’impact sur le changement d'un code de version : identification des dépendances, des risques techniques et accompagnement des changements en environnement critique.",
    technologies: ["Gitlab", "Bitbucket"],
  },
  {
    id: "AI R&D",
    company: "Infotel Blagnac",
    role: "R&D Engineer (IA)",
    period: "Mai 2024 - Oct 2024",
    description:
      "Recherche et intégration de solutions IA : analyse de modèles, veille technologique et développement d’un chatbot en React/Next.js adapté au contexte métier.",
    technologies: ["React", "Next.js", "Python"],
  },
  {
    id: "MRDB",
    company: "Infotel Blagnac",
    role: "Data Developer",
    period: "Avril 2024 - Mai 2024",
    description:
      "Transformation et exploitation de datasets pour produire de nouvelles données métier. Collaboration directe avec le client pour faire évoluer les besoins.",
    technologies: ["JavaScript", "Pyspark", "Skywise"],
  },
  {
    id: "Athenaa",
    company: "Infotel Blagnac",
    role: "Fullstack Developer",
    period: "Mars 2024 - Avril 2024",
    description:
      "Développement d’une application de calcul de moyennes de vol (heures et cycles) avec intégration front dans des visualisations dynamiques.",
    technologies: ["JavaScript", "Pyspark", "Skywise"],
  },
  {
    id: "Madness",
    company: "Infotel Blagnac",
    role: "Data Analyst / Developer",
    period: "Fév 2024 - Mars 2024",
    description:
      "Analyse d’un outil de transformation de données (Contour), optimisation des traitements et rédaction de spécifications techniques.",
    technologies: ["JavaScript", "Pyspark", "Skywise"],
  },
  {
    id: "Airframe",
    company: "Infotel Blagnac",
    role: "Fullstack Developer",
    period: "Déc 2023 - Fév 2024",
    description:
      "Développement d’une application de suivi de KPIs avec optimisation des performances et des requêtes, en collaboration avec le client.",
    technologies: ["JavaScript", "Pyspark", "Skywise"],
  },
  {
    id: "ASN/AOG",
    company: "Infotel Blagnac",
    role: "Fullstack Developer",
    period: "Sept 2023 - Déc 2023",
    description:
      "Évolution d’une application de suivi d’incidents de flotte : développement de fonctionnalités, gestion des rôles et administration des données.",
    technologies: ["Angular", "C#", "SQL Server", "Gitlab"],
  },
  {
    id: "LP ADV",
    company: "LP Promotion",
    role: "Fullstack Developer",
    period: "2022 - Mai 2023",
    description:
      "Refonte d’un outil métier : migration de base de données, développement de fonctionnalités clés et optimisation des performances API.",
    technologies: ["Blazor", "C#", "Docker", "SQL Server"],
  },
  {
    id: "LP Workplace",
    company: "LP Promotion",
    role: "Fullstack Developer",
    period: "Juin 2021 - Déc 2021",
    description:
      "Développement d’un outil interne de recherche et collaboration : moteur de recherche, gestion de contenus et système de favoris.",
    technologies: ["Blazor", "C#", "Azure AD", "Docker"],
  },
  {
    id: "LP Inside",
    company: "LP Promotion",
    role: "Fullstack Developer",
    period: "Oct 2020 - Mai 2023",
    description:
      "Participation à la mise en place d’une plateforme interne modulaire : architecture microservices, CI/CD, qualité de code et collaboration UX/UI.",
    technologies: ["Blazor", "C#", "Docker", "Azure AD"],
  },
  {
    id: "UI Framework",
    company: "LP Promotion",
    role: "Frontend Developer",
    period: "Oct 2020 - Mai 2023",
    description:
      "Création d’une librairie de composants Blazor réutilisables avec documentation et standardisation des interfaces.",
    technologies: ["Blazor", "C#", "CSS"],
  },
  {
    id: "Flux Partenaire V2",
    company: "LP Promotion",
    role: "Fullstack Developer",
    period: "Oct 2019 - Sept 2020",
    description:
      "Refonte d’un système de génération de flux XML : architecture microservices, API REST et gestion des échanges partenaires.",
    technologies: ["JavaScript", "C#", "SQL Server"],
  },
];

export function ExperienceTree() {
  const [expandedId, setExpandedId] = useState<string | null>("stellar")

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Missions
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative mb-8 last:mb-0">
              {/* Node */}
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className={`absolute left-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10
                  ${expandedId === exp.id 
                    ? "bg-primary border-primary text-primary-foreground scale-110" 
                    : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>

              {/* Content */}
              <div className="ml-16">
                <button
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="text-left w-full"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="text-xl font-semibold text-foreground">{exp.id}</h3>
                    <span className="text-primary font-mono text-sm">{exp.company}</span>
                    <span className="text-muted-foreground text-sm font-mono">{exp.period}</span>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedId === exp.id ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
