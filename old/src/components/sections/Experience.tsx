import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Briefcase, GraduationCap, Clock } from "../../../old/node_modules/lucide-react/dist/lucide-react";

export function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: "Audit / Administrative Support",
      company: "On-site Professional Role",
      date: "Previous Experience",
      responsibilities: [
        "Prepared and reviewed reports to ensure accuracy and completeness before submission.",
        "Analyzed data discrepancies and coordinated corrections with supervisors.",
        "Conducted research to understand new tasks and audit-related processes.",
        "Adapted quickly to responsibilities beyond the original scope of work.",
        "Managed multiple tasks by prioritizing urgent and important documents.",
        "Maintained organized digital and physical records for easy access.",
        "Assisted team members with documentation and data-related tasks.",
        "Communicated work progress and updates through email and messaging.",
      ],
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      company: "Continuous Skill Improvement",
      date: "",
      responsibilities: [
        "Self-studied Excel and basic bookkeeping concepts through online tutorials",
        "Practices new skills immediately to improve efficiency and accuracy",
        "Continuously learning tools and workflows relevant to remote work",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background" aria-labelledby="experience-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            id="experience-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Professional Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-l-primary/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-linear-to-r from-primary/5 to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl ring-2 ring-primary/20">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                        <CardTitle className="text-2xl text-primary">
                          {exp.title}
                        </CardTitle>
                        {exp.date && (
                          <Badge variant="secondary" className="gap-1">
                            <Clock className="w-3 h-3" />
                            {exp.date}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base font-semibold text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <Separator className="mt-4" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="text-foreground font-bold mt-1">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
