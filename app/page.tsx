import { StarField } from "@/components/star-field"
import { NavBar } from "@/components/nav-bar"
import { TerminalHero } from "@/components/terminal-hero"
import { ExperienceTree } from "@/components/experience-tree"
import { FormationsSection } from "@/components/formations-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen">
      <StarField />
      <NavBar />
      <TerminalHero />
      <ExperienceTree />
      <FormationsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
