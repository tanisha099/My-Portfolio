import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "React Developer",
      company: "Pseudo Soft",
      period: "July 2024",
      achievements: [
        "Successfully developed and deployed multiple responsive web components using React.js for real client projects.",
        "Collaborated with backend developers and designers to ensure smooth API integration and consistent UI/UX.",
        "Optimized web performance by applying best practices in React, reducing component re-renders and improving load time",
        "Took initiative to refactor legacy code into modular components, improving maintainability and scalability",
        "Gained hands-on experience in version control using Git and participated in team code reviews and agile meetings.",

      ],
    },
    {
      title: "Wordpress developer",
      company: "Perfect jugado",
      period: "Nov 2024",
      achievements: [
        "Successfully designed and developed the official website of Perfect Jugaduo using WordPress, delivering a fully responsive and user-friendly interface",
        "Customized themes and integrated essential plugins to enhance website performance, SEO, and user engagement.",
        "Collaborated closely with a dynamic startup team, ensuring seamless communication and alignment of project goals.",
        "Contributed creative ideas for branding and layout, helping the startup build a strong online presence from scratch",
      
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Nullclass Pvt.Ltd. ",
      period: "junuary 2025",
      achievements: [
        "Completed a hands-on internship focused on full-stack web development, gaining practical exposure to real-world coding practices.",
        "Worked on multiple front-end and back-end tasks, improving skills in HTML, CSS, JavaScript, Node.js and API integration.",
        " Built and deployed mini projects under mentorship, showcasing ability to learn quickly and implement solutions independently",
        " Improved problem-solving and debugging skills, consistently meeting deadlines and quality standards.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
