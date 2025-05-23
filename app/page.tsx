import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tanisha Muvel|Software Engineer & Designer",
  description:
    "Portfolio of tanisha muvel a Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
